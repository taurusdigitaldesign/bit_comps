import * as React from 'react';

export interface IProps {
  // 图标
  icon?: string;
  // 文本
  text?: string | React.ReactNode;
  // 值
  value: string;
  // 基本样式
  className?: string;
  // 是否选中
  selected?: boolean;
  // 选中色
  selectedColor?: string;
  // 是否组成Group，如果是selected交由父级管理
  isGroup?: boolean;
  // 点击触发事件
  onClick?: Function;
}
