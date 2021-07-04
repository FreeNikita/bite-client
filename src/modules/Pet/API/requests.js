import { firebase } from '../../../libs/firebase';
import { generateFileName, getFileType, pipe } from '../../../utils';

export const createPet = (data) => firebase.firestore()
  .collection('pets')
  .add(data);

export const updatePet = (data) => firebase.firestore()
  .collection('pets')
  .doc(data.id)
  .update(data);

export const getPet = (id) => firebase.firestore()
  .doc(`pets/${id}`);

export const addPhoto = ({
  file,
  orgId,
  callback,
}) => {
  const storageRef = firebase.storage().ref();
  const fileName = pipe(getFileType, generateFileName)(file);

  const uploadTask = storageRef
    .child(`/${orgId}/${fileName}`)
    .put(file);

  return uploadTask.on('state_changed',
    () => {},
    () => {},
    () => {
      uploadTask.snapshot.ref.getDownloadURL().then(callback);
    });
};
