import { API } from '../api/api';
import { BackCaller } from './ipc/link';

/** バックエンドからで呼んでいいapi */
export let api: BackCaller<API>;

export function setBackAPI(_api: BackCaller<API>) {
  api = _api;
}
