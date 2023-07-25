import { BrowserWindow, ipcMain } from 'electron';
import { rootLoggerHierarchy } from '../core/logger';
import { assertComplete } from '../lifecycle/lifecycle';

export const ipcLoggers = rootLoggerHierarchy.ipc;

export const ipcHandle = <C extends string>(
  channel: C,
  listener: (...args: any[]) => Promise<any>
) =>
  ipcMain.handle(channel, (_, ...args: any[]) => {
    const logger = ipcLoggers.handle[channel](
      args.map((x) => JSON.stringify(x))
    );
    logger.start();
    const result = listener(...args);
    result.then(
      (x) => {
        logger.success(JSON.stringify(x));
        return x;
      },
      (x) => {
        logger.fail(JSON.stringify(x));
        return x;
      }
    );
    return assertComplete(result);
  });

export const ipcOn = <C extends string>(
  channel: C,
  listener: (...args: any[]) => void
) =>
  ipcMain.on(channel, (_, ...args: any[]) => {
    const logger = ipcLoggers.on[channel](args.map((x) => JSON.stringify(x)));
    listener(...args);
    logger.success();
  });

export const ipcSend = <C extends string>(
  window: BrowserWindow,
  channel: C,
  ...args: any[]
) => {
  const logger = ipcLoggers.send[channel](args.map((x) => JSON.stringify(x)));
  logger.success();
  window.webContents.send(channel, ...args);
};

let invokeid = -1;

export function ipcInvoke<C extends string, T>(
  window: BrowserWindow,
  channel: C,
  ...args: any[]
) {
  return new Promise<T>((resolve) => {
    const logger = ipcLoggers.invoke[channel](
      args.map((x) => JSON.stringify(x))
    );

    invokeid++;
    const sendId = invokeid.toString();
    const handleChannel = 'handle:' + channel;
    const listener = (
      _: Electron.IpcMainEvent,
      result: any,
      resultId: string
    ) => {
      if (sendId === resultId) {
        ipcMain.removeListener(handleChannel, listener);
        logger.success(JSON.stringify(result));
        resolve(result);
      }
    };

    ipcMain.on(handleChannel, listener);

    logger.start();
    window.webContents.send(channel, sendId, ...args);
  });
}
