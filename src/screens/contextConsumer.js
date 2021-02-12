import React from 'react';
import {SalaryContext} from './context';

export const ContextConsumer = () => {
  const state = React.useContext(SalaryContext).state;
  const setState = React.useContext(SalaryContext).setState;
  return [state, setState];
};
