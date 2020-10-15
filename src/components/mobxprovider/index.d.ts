// create React Context
type IValueMap = Record<string, any>;

// the component using to provide the global store
export interface ProviderProps extends IValueMap {
  children: React.ReactNode;
}
