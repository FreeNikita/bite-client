import { lazy } from 'react';

const DashboardPage = lazy(() => import('pages/Dashboard'));
const HomePage = lazy(() => import('pages/Home'));
const PetPage = lazy(() => import('pages/Pet'));

export const HOME_PAGE = '/';
export const PETS_PAGE = '/pets';
export const PET_PAGE = '/pet';
export const OPEN_PET_PAGE = `${PET_PAGE}/:id`;
export const ADD_PET_PAGE = `${PET_PAGE}/create`;

export const routing = [
  {
    component: DashboardPage,
    path: HOME_PAGE,
    exact: true,
  },
  {
    component: HomePage,
    path: PETS_PAGE,
    exact: true,
  },
  {
    component: PetPage,
    path: ADD_PET_PAGE,
    exact: true,
  },
  {
    component: PetPage,
    path: OPEN_PET_PAGE,
  },
];
