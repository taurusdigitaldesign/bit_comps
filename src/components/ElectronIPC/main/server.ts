import { IpcMain } from 'electron';
import { ClientMsg, Reply, IpcContext, Callback } from './index.d';


// callback 回调缓存
const _cbMap = new Map<string, Callback>();

export default function (ipcMain: IpcMain) {
  ipcMain.on('from-client', (event, clientMsg: ClientMsg) => {
    //  包裹响应函数
    const reply: Reply = function (data: any) {
      // 将 currentSymbol 返回给客户端
      event.reply('from-server', {
        currentSymbol: clientMsg.currentSymbol,
        data
      });
    };
    const ctx: IpcContext = {
      reply,
      type: clientMsg.type
    };
    // 获取缓存的函数，并传递客户端发来的参数
    const _cb = _cbMap.get(ctx.type);
    if (typeof _cb === 'function') {
      _cb(ctx, clientMsg.data);
    }
  });

  // 注册函数
  function use(type: string, cb: Callback) {
    _cbMap.set(type, cb);
  }

  return {
    use
  };
}
