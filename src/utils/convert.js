export const firebaseToArray = (petsFromBack) => Object.entries(petsFromBack)
  .map(([key, value]) => ({ id: key, ...value }));
