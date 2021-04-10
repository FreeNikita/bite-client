import { types } from './types';

export const initialState = {
  uid: null,
  name: '',
  email: '',
  emailVerified: false,
  organizationIds: [],

  isLoading: false,
};

const actions = {
  [types.INIT_USER]: (state, { uid, emailVerified, displayName }) => ({
    ...state,
    uid,
    emailVerified,
    name: displayName,
  }),
  [types.START_LOADING]: (state) => ({
    ...state,
    isLoading: true,
  }),
  [types.STOP_LOADING]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [types.SET_ORGANIZATION]: (state, { organizationIds }) => ({
    ...state,
    organizationIds,
  }),
  default: (state) => ({ ...state }),
};

export const reducers = (state, { type, payload }) => {
  const dispatch = actions[type] || actions.default;

  return dispatch(state, payload);
};
