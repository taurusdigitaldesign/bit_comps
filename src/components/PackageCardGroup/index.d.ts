export type RenderFunction = (record: object) => React.ReactNode;

export interface IProps {
  // 样式
  className?: string;
  // 是否滚动条
  scroll?: boolean;
  // 默认选中值
  defaultValue?: string;
  // 模式
  radioMode?: boolean;
  // 选中色
  selectedColor?: string;
  // 选中值改变时触发事件
  onChange?: Function;
}
