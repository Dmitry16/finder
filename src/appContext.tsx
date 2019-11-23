import { createContext } from 'react';

const initialContextValue = {
  valueToPass: '',
  clickHandler: (clickedOption: string) => {}
}
export const AppContext = createContext(initialContextValue);
