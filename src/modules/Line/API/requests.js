import { firebase } from '../../../libs/firebase';

export const getAllOrganizationPets = (id) => firebase.firestore()
  .collection('pets')
  .where('organizationId', '==', id);
