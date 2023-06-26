import { OpLevel } from 'src-electron/schema/player';
import { ServerSettingFile } from './base';
import { PlayerUUID } from 'app/src-electron/schema/brands';
import { fixPlayerUUID } from '../../fixers/brands';
import {
  FAIL,
  arrayFixer,
  booleanFixer,
  objectFixer,
  stringFixer,
} from 'app/src-electron/util/detaFixer/fixer';
import { fixOpLevel } from '../../fixers/player';
import { isFailure } from 'app/src-electron/api/failable';

export type OpRecord = {
  uuid: PlayerUUID;
  name: string;
  level: OpLevel;
  bypassesPlayerLimit: boolean;
};

export type Ops = OpRecord[];

export const fixOpRecord = objectFixer<OpRecord>(
  {
    uuid: fixPlayerUUID,
    name: stringFixer(),
    level: fixOpLevel,
    bypassesPlayerLimit: booleanFixer(false),
  },
  false
);

export const fixOps = arrayFixer(fixOpRecord, false);

const OPS_FILE = 'ops.json';

export const serverOpsFile: ServerSettingFile<Ops> = {
  async load(cwdPath) {
    const filePath = cwdPath.child(OPS_FILE);
    const value = await filePath.readJson<Ops>();
    if (isFailure(value)) return value;
    const fixed = fixOps(value);
    if (fixed === FAIL) return new Error(`${filePath} is invalid ops file`);
    return fixed;
  },
  save(cwdPath, value) {
    return cwdPath.child(OPS_FILE).writeText(JSON.stringify(value));
  },
};
