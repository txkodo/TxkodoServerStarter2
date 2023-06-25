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
import { getDefaultSettings } from '../core/settings/settings';
import { getSystemSettings, setSystemSettings } from '../core/stores/system';
import { genUUID } from 'src-electron/tools/uuid';
import { validateNewWorldName } from '../core/world/name';
import { searchPlayer } from '../core/player/search';
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
    RunServer: runServer,

    DeleteWorld: deleteWorld,

    PickDirectory: pickDirectory(windowGetter),

    SaveWorldSettings: saveWorldSettings,

    GetSystemSettings: getSystemSettings,
    SetSystemSettings: setSystemSettings,

    GetDefaultSettings: getDefaultSettings,
    GetVersions: getVersions,
    GetWorldContainers: getWorldContainers,
    SetWorldContainers: setWorldContainers,
    GetWorldAbbrs: getWorldAbbrs,
    GetWorld: getWorld,

    ValidateNewWorldName: validateNewWorldName,

    GetRunningWorld: getRunningWorld,

    GetDefaultWorld: getDefaultWorld,
    // UpdatetRunningWorld: updateRunningWorld,

    SearchPlayer: searchPlayer,

    GenUUID: async () => genUUID(),
    IWMTest: testHandle,
  },
});
