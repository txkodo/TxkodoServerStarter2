import { fixArray, ArrayFixMode } from '../base/fixer/array';
import { fixUUID } from '../base/fixer/brand';
import { fixObject } from '../base/fixer/object';
import { fixString } from '../base/fixer/primitive';
import { RecordFixMode, fixRecord } from '../base/fixer/record';

/** システムのプレイヤーグループ設定 */
export type PlayerGroup$1 = {
  /** グループ名 */
  name: string;
  /** グループのカラー(#入りコード) */
  color: string;
  /** 所属するプレイヤーのUUIDのリスト */
  players: string[];
};

export const PlayerGroup$1 = fixObject<PlayerGroup$1>({
  name: fixString,
  color: fixString,
  players: fixArray(fixUUID, ArrayFixMode.Skip),
});

export type AppPlayerSettings$1 = {
  groups: { [name: string]: PlayerGroup$1 };
  players: string[];
};

export const defaultAppPlayerSettings$1 = {
  groups: {},
  players: [],
};

export const AppPlayerSettings$1 = fixObject<AppPlayerSettings$1>({
  groups: fixRecord(PlayerGroup$1, RecordFixMode.Skip).default({}),
  players: fixArray(fixUUID, ArrayFixMode.Skip).default([]),
}).default(defaultAppPlayerSettings$1);