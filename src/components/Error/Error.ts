import { ErrorMessage, Failable } from 'app/src-electron/schema/error';
import { isValid } from 'src/scripts/error';

let _openDialogFunc: (args: iErrorDialogProps) => void
export function setOpenDialogFunc(func: (args: iErrorDialogProps) => void) {
  _openDialogFunc = func
}

export interface iErrorDialogProps {
  title: string
  desc?: string
}

/**
 * エラーが発生する可能性のある変数をチェックし、エラーがある場合はエラー画面を表示する
 * @param check エラーチェックをする変数
 * @param successProcess エラーがなかった場合の処理
 * @param errorDescription エラーが起きた場合の説明文（デフォルトは「不明なエラーが発生しました。」）
 */
export function checkError<S>(
  check: Failable<S>,
  successProcess?: (checked: S) => void,
  errorDescription?: (error: ErrorMessage) => { title: string, desc?: string }
) {
  if (isValid(check)) {
    if (successProcess !== void 0) successProcess(check)
    return check
  }
  else {
    if (errorDescription !== void 0) {
      const errorMessage = errorDescription(check)
      _openDialogFunc({
        title: errorMessage.title,
        desc: errorMessage.desc
      })
    }

    // TODO: エラー画面を表示するのはFailableではない未知のエラー（RuntimeError）の時のみとし、
    // Failableによるエラーは画面の左下に表示するだけ、などの処理に変更
    // _router.replace('/error')
  }
}