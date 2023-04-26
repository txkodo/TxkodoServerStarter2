import { Remote, World } from 'src-electron/api/schema';
import { RemoteOperator } from './base';
import { gitRemoteOperator } from './git/git';
import { Path } from '../../utils/path/path';
import { Failable } from 'src-electron/api/failable';

gitRemoteOperator;

export const remoteOperators: {
  [R in Remote as R['type']]: RemoteOperator<Remote>;
} = {
  git: gitRemoteOperator,
};

// ワールドのデータをpull
export async function pullWorld<R extends Remote>(
  local: Path,
  remote: R
): Promise<Failable<undefined>> {
  const loader: RemoteOperator<R> = remoteOperators[
    remote.type
  ] as RemoteOperator<R>;
  return await loader.pullWorld(local, remote);
}

// ワールドのデータをpush
export async function pushWorld<R extends Remote>(
  local: Path,
  remote: R
): Promise<Failable<undefined>> {
  const loader: RemoteOperator<R> = remoteOperators[
    remote.type
  ] as RemoteOperator<R>;
  return await loader.pushWorld(local, remote);
}

// ワールドの設定を読み込む
export async function getWorld<R extends Remote>(
  local: Path,
  remote: R
): Promise<Failable<World>> {
  const loader: RemoteOperator<R> = remoteOperators[
    remote.type
  ] as RemoteOperator<R>;
  return await loader.getWorld(local, remote);
}
