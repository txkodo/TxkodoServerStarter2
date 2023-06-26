import { API } from 'src-electron/api/api';
import { BackListener } from 'src-electron/ipc/link';
import { BrowserWindow } from 'electron';
import {
  getRunningWorld,
  runCommand,
  runServer,
  saveWorldSettings,
} from '../core/server/server';
import { getVersions } from '../core/version/version';
import {
  deleteWorld,
  getDefaultWorld,
  getWorld,
  getWorldAbbrs,
} from '../core/world/world';
import { openBrowser, openFolder, pickDirectory } from '../tools/shell';
import {
  getWorldContainers,
  setWorldContainers,
} from '../core/world/worldContainer';
import { getSystemSettings, setSystemSettings } from '../core/stores/system';
import { genUUID } from 'src-electron/tools/uuid';
import { validateNewWorldName } from '../core/world/name';
import { searchPlayer } from '../core/player/search';
import { getStaticResoure } from '../core/resource';
import { testHandle, testOn } from './test';

export const getBackListener = (
  windowGetter: () => BrowserWindow | undefined
): BackListener<API> => ({
  on: {
    Command: runCommand,
    OpenBrowser: openBrowser,
    OpenFolder: openFolder,
    SWMTest: testOn,
  },
  handle: {
    GetStaticResouce: getStaticResoure,

    GetSystemSettings: getSystemSettings,
    SetSystemSettings: setSystemSettings,

    GetWorldContainers: getWorldContainers,
    SetWorldContainers: setWorldContainers,

    GetWorldAbbrs: getWorldAbbrs,

    GetWorld: getWorld,
    SetWorld: undefined,
    NewWorld: undefined,
    CreateWorld: undefined,
    DeleteWorld: undefined,

    RunServer: runServer,

    SearchPlayer: searchPlayer,

    GetVersions: getVersions,

    ValidateNewWorldName: validateNewWorldName,

    GetRunningWorld: getRunningWorld,

    GetDefaultWorld: getDefaultWorld,
    // UpdatetRunningWorld: updateRunningWorld,

    SearchPlayer: searchPlayer,

    GenUUID: async () => genUUID(),
    IWMTest: testHandle,
  },
});
