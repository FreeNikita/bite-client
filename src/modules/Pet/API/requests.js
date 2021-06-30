import { firebase } from '../../../libs/firebase';

export const createPet = (data) => firebase.firestore()
  .collection('pets')
  .add(data);

export const updatePet = (data) => firebase.firestore()
  .collection('pets')
  .doc(data.id)
  .update(data);

export const getPet = (id) => firebase.firestore()
  .doc(`pets/${id}`);
