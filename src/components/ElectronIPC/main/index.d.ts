interface ClientMsg {
  currentSymbol: string;
  type: string;
  data: any;
}

type Reply = (data: any) => void;

interface IpcContext {
  reply: Reply;
  type: string;
}

type Callback = (ctx: IpcContext, data: any) => void;

export { ClientMsg, Reply, IpcContext, Callback };