import { TYPES } from './types';

export const initialState = {
  id: '',
  organizationId: '',
  name: '',
  age: '',
  breed: '',
  imageURL: '',
  images: [],
};

const actions = {
  [TYPES.GET_PET_BY_ID]: (state, payload) => ({
    ...state,
    ...payload,
  }),
  [TYPES.UPDATE_PET]: (state, { imageURL, fileName }) => ({
    ...state,
    ...(imageURL && { imageURL }),
    ...(fileName && { images: state.images.concat(fileName) }),
  }),
  [TYPES.ADD_PHOTO]: (state, { imageURL }) => ({
    ...state,
    ...(imageURL && { imageURL }),
    ...(imageURL && { images: state.images.concat(imageURL) }),
  }),
  // TODO Need to add actions
  [TYPES.UPDATE_MAIN_PHOTO]: (state) => state,
  default: (state) => state,
};

export const reducers = (state, { type, payload }) => {
  const dispatch = actions[type] || actions.default;

  return dispatch(state, payload);
};
