import { createContext } from 'react';

export const AppContext = createContext({
  state: {
    data: [''],
    inputValue: '',
    displayMatchesList: false,
    matches: []
  },
  setState: ({}) => {}
});
