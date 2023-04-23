import { API } from 'app/src-electron/api/api';
import { BackListener } from 'app/src-electron/core/ipc/link';
import { runCommand, runServer } from '../server/server';
import { getVersions } from '../server/version/version';
import { getWorlds } from '../server/world/world';
import { openBrowser } from '../utils/openBrowser';
import { getWorldContainers } from '../server/worldContainer';

export const backListener: BackListener<API> = {
  on: {
    Command: runCommand,
    OpenBrowser: openBrowser,
  },
  handle: {
    RunServer: runServer,
    GetVersions: getVersions,
    GetWorldContainers: getWorldContainers,
    GetWorlds: getWorlds,
  },
};
