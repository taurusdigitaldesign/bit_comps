// 文本框校验回调
export type OnValidateFunction = () => boolean;
// 点击按钮回调
export type OnSendFunction = () => Promise<boolean>;

export interface IProps {
  // 样式名称
  className?: string;
  // 发送文本
  text: string;
  // 倒计时，默认60
  time?: number;
  // 最大长度
  maxLen?: number;
  // Placeholder文本
  placeholder: string;
  // 值发生改变触发事件
  onChange?: Function;
  // 点击按钮前触发事件，可用于值的校验
  onValidate?: OnValidateFunction;
  // 点击按钮后触发事件，可用于处理验证码发送逻辑
  onSend: OnSendFunction;
  // 文本框获得焦点触发事件
  onFocus?: Function;
}