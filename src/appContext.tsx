import { createContext } from 'react';

const initialContextValue = {
  valueToPass: '',
  setSelectedOption: (clickedOption: string) => {}
}
export const AppContext = createContext(initialContextValue);
