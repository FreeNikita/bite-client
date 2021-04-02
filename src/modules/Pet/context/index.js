import React, { createContext, useMemo, useReducer } from 'react';
import { element } from 'prop-types';
import { reducers, initialState } from './reducers';

export const PetContext = createContext({});
export const PetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const actions = useMemo(() => ({
    dispatch,
  }), [dispatch]);

  return (
    <PetContext.Provider value={[state, actions]}>
      {children}
    </PetContext.Provider>
  );
};

PetProvider.propTypes = {
  children: element.isRequired,
};
