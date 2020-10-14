/**
 * @name MobXProvider
 * @desc
 * mobx的hooks用法，提供了一个MobxProvider组件，与原来的Provider用法一致；
 * 调用全局数据的use方法：useStores(name)
 */
import React from 'react';

export const MobXProviderContext = React.createContext({});

export function MobXProvider(props) {
  const { children, ...stores } = props;
  const parentValue = React.useContext(MobXProviderContext);
  const mutableProviderRef = React.useRef({ ...parentValue, ...stores });
  const value = mutableProviderRef.current;

  return <MobXProviderContext.Provider value={value}>{children}</MobXProviderContext.Provider>;
}

// a hook method using global store
export function useStores(name) {
  return React.useContext(MobXProviderContext)[name];
}
