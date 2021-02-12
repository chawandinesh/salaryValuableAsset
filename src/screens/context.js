import React from 'react';

export const SalaryContext = React.createContext(null);

const initialState = {
  'Full Time': [],
  'Part Time': [],
  Casual: [],
  'Fixed Terms': [],
};
export function Context(props) {
  const [state, setState] = React.useState(initialState);
  return (
    <SalaryContext.Provider value={{state, setState}}>
      {props.children}
    </SalaryContext.Provider>
  );
}
