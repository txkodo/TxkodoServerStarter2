import { BytesData } from '../bytesData';
import { isError } from '../error/error';
import { Failable } from '../error/failable';
import { MemeType } from './memetype';

type RequestHeader = {
  Accept: string;
  Authorization?: string;
};

export async function getJsonResponse<T>(
  url: string,
  pat?: string,
  accept = 'application/vnd.github+json'
): Promise<Failable<T>> {
  // PATの認証情報をヘッダーに付与してfetch
  const requestHeader: RequestHeader = { Accept: accept };

  if (pat !== undefined) requestHeader.Authorization = `Bearer ${pat}`;

  const responce = await BytesData.fromURL(url, undefined, requestHeader);

  if (isError(responce)) return responce;

  // jsonを取得
  const json = await responce.json<T>();
  return json;
}

type BytesRequestHeader = {
  Authorization?: string;
  Accept?: string;
};

/** github上のurlからバイトデータを取得 */
export async function getBytesFile(
  url: string,
  pat?: string,
  accept: MemeType = 'application/octet-stream'
): Promise<Failable<BytesData>> {
  // PATの認証情報をヘッダーに付与してfetch
  const requestHeader: BytesRequestHeader = {};

  if (pat !== undefined) {
    requestHeader.Authorization = `Bearer ${pat}`;
  }

  if (accept !== undefined) {
    requestHeader.Accept = accept;
  }

  const responce = await BytesData.fromURL(url, undefined, requestHeader);
  return responce;
}
