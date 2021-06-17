import { types } from './types';

export const initialState = {
  organizationId: '',
  name: '',
  age: '',
  breed: '',
  imageURL: '',
};

const actions = {
  [types.GET_PET_BY_ID]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [types.UPDATE_PET]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  default: (state) => ({ ...state }),
};

export const reducers = (state, { type, payload }) => {
  const dispatch = actions[type] || actions.default;

  return dispatch(state, payload);
};
