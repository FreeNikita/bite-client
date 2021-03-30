import { Home } from 'pages/Home';
import { Pet } from 'pages/Pet';

export const HOME_PAGE = '/';
export const PET_PAGE = '/pet';
export const OPEN_PET_PAGE = `${PET_PAGE}/:id`;
export const ADD_PET_PAGE = `${PET_PAGE}/create`;

export const routing = [
  {
    component: Home,
    path: HOME_PAGE,
    exact: true,
  },
  {
    component: Pet,
    path: OPEN_PET_PAGE,
  },
  {
    component: Pet,
    path: ADD_PET_PAGE,
  },
];
