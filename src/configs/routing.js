import { lazy } from 'react';

const HomePage = lazy(() => import('pages/Home'));
const PetPage = lazy(() => import('pages/Pet'));
const CreatePet = lazy(() => import('pages/CreatePet'));

export const HOME_PAGE = '/dashboard';
export const PET_PAGE = '/pet';
export const OPEN_PET_PAGE = `${PET_PAGE}/:id`;
export const ADD_PET_PAGE = `${PET_PAGE}/create`;

export const routing = [
  {
    component: HomePage,
    path: HOME_PAGE,
    exact: true,
  },
  {
    component: CreatePet,
    path: ADD_PET_PAGE,
    exact: true,
  },
  {
    component: PetPage,
    path: OPEN_PET_PAGE,
  },
];
