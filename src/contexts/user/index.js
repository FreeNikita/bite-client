import React, {
  createContext, useEffect, useMemo, useReducer,
} from 'react';
import { element } from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { reducers, initialState } from './reducers';
import { firebase } from '../../libs/firebase';
import {
  INIT_USER, START_LOADING, STOP_LOADING, SET_ORGANIZATION,
} from './reducers/types';

export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducers, initialState);
  const [user, isLoading] = useAuthState(firebase.auth());

  useEffect(() => {
    dispatch({ type: isLoading ? START_LOADING : STOP_LOADING });
  }, [isLoading]);

  useEffect(() => {
    if (user) {
      const { uid } = user;

      const checkUserOrganization = async () => {
        let res = await firebase.firestore().collection('organizations')
          .where('employees', 'array-contains', uid).get();

        const organizationIds = res.docs.map(({ id }) => id);
        if (organizationIds.length) {
          dispatch({ type: SET_ORGANIZATION, payload: { organizationIds } });
        } else {
          res = await firebase.firestore().collection('organizations').add({ name: user.displayName, employees: [uid] });
          dispatch({ type: SET_ORGANIZATION, payload: { organizationIds: [res.id] } });
        }
      };

      dispatch({
        type: INIT_USER,
        payload: user,
      });
      checkUserOrganization().finally(() => {
        dispatch({ type: STOP_LOADING });
      });
    }
  }, [user]);

  const actions = useMemo(() => ({
    dispatch,
  }), [dispatch]);

  return (
    <UserContext.Provider value={[state, actions]}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: element.isRequired,
};
