import { API } from 'src-electron/api/api';
import { BackListener } from 'app/src-electron/ipc/link';
import {
  runCommand,
  runServer,
  saveWorldSettings,
} from '../core/server/server';
import { getVersions } from '../core/version/version';
import { getWorld, getWorldAbbrs } from '../core/world/world';
import { openBrowser } from '../util/openBrowser';
import {
  getWorldContainers,
  setWorldContainers,
} from '../core/world/worldContainer';
import { getDefaultSettings } from '../core/settings/settings';

export const backListener: BackListener<API> = {
  on: {
    Command: runCommand,
    OpenBrowser: openBrowser,
  },
  handle: {
    RunServer: runServer,
    SaveWorldSettings: saveWorldSettings,
    GetDefaultSettings: getDefaultSettings,
    GetVersions: getVersions,
    GetWorldContainers: getWorldContainers,
    SetWorldContainers: setWorldContainers,
    GetWorldAbbrs: getWorldAbbrs,
    GetWorld: getWorld,
  },
};