import { Failable, isFailure, isSuccess } from 'app/src-electron/api/failable';
import { Player } from 'app/src-electron/schema/player';
import { EXPIRATION_SPAN, getPlayerCache, pushPlayerCache } from './cache';
import { PlayerUUID } from 'app/src-electron/schema/brands';
import { searchPlayerFromName, searchPlayerFromUUID } from './search';
import { getCurrentTimestamp } from 'app/src-electron/util/timestamp';
import { formatUUID } from 'app/src-electron/tools/uuid';

/** 名前またはUUIDからプレイヤーを取得 (キャッシュに存在する場合高速) */
export async function getPlayer(
  nameOrUuid: string,
  mode: 'name' | 'uuid' | 'auto'
): Promise<Failable<Player>> {
  switch (mode) {
    case 'name':
      if (!isName(nameOrUuid)) return new Error('無効なプレイヤー名');
      return await getPlayerFromName(nameOrUuid);
    case 'uuid':
      if (!isUUID(nameOrUuid)) return new Error('無効なプレイヤーUUID');
      return await getPlayerFromUUID(nameOrUuid);
    case 'auto':
      if (isName(nameOrUuid)) return await getPlayerFromName(nameOrUuid);

      // autoの場合のみ 0-0-0-0-0 のような短縮UUIDやハイフンのないUUIDを許可する
      const uuid = formatUUID<PlayerUUID>(nameOrUuid);
      if (isFailure(uuid)) return new Error('無効なプレイヤー名またはUUID');

      return await getPlayerFromUUID(uuid);
  }
}

function isName(name: string): boolean {
  return name.match(/^[a-zA-Z0-9_]{2,16}$/gm) !== null;
}

function isUUID(name: string): name is PlayerUUID {
  return (
    name.match(
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/gm
    ) !== null
  );
}

/** 名前からプレイヤーを取得 (キャッシュに存在する場合高速) */
export async function getPlayerFromName(
  name: string
): Promise<Failable<Player>> {
  const cache = await getPlayerCache();
  const cacheValue = Object.values(cache).find((x) => x.name == name);
  if (cacheValue !== undefined) {
    // 最後の検索から一定時間が立っていた場合再検索する(待機しない)
    if (
      getCurrentTimestamp() + EXPIRATION_SPAN >
      cacheValue.expire + RE_SERACH_SPAN
    )
      serchAndPushName(name);

    return cacheValue;
  }
  return await serchAndPushName(name);
}

// 再検索までの時間(10日)
const RE_SERACH_SPAN = 1000 * 60 * 60 * 24 * 10;

/** UUIDからプレイヤーを取得 (キャッシュに存在する場合高速) */
export async function getPlayerFromUUID(
  uuid: PlayerUUID
): Promise<Failable<Player>> {
  const cache = await getPlayerCache();
  const cacheValue = cache[uuid];
  if (cacheValue !== undefined) {
    // 最後の検索から一定時間(10日)が経っていた場合再検索する(待機しない)
    if (
      getCurrentTimestamp() + EXPIRATION_SPAN >
      cacheValue.expire + RE_SERACH_SPAN
    )
      serchAndPushUUID(uuid);

    return cacheValue;
  }
  return await serchAndPushUUID(uuid);
}

// プレイヤーを検索してキャッシュを更新
async function serchAndPushUUID(uuid: PlayerUUID) {
  const result = await searchPlayerFromUUID(uuid);
  if (isSuccess(result)) pushPlayerCache(result);
  return result;
}

// プレイヤーを検索してキャッシュを更新
async function serchAndPushName(name: string) {
  const result = await searchPlayerFromName(name);
  if (isSuccess(result)) pushPlayerCache(result);
  return result;
}
