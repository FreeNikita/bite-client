import { types } from './types';

export const initialState = {
  data: {
    name: '',
    age: '',
    breed: '',
  },
  isLoading: true,
};

const actions = {
  [types.GET_PET_BY_ID]: (state, { data }) => ({
    ...state,
    data: {
      ...state.data,
      ...data,
    },
    isLoading: false,
  }),
  [types.LOADING_FINISH]: (state) => ({
    ...state,
    isLoading: false,
  }),
  [types.UPDATE_PET]: (state, { data }) => ({
    ...state,
    data: {
      ...state.data,
      ...data,
    },
  }),
  default: (state) => ({ ...state }),
};

export const reducers = (state, { type, payload }) => {
  const dispatch = actions[type] || actions.default;

  return dispatch(state, payload);
};
