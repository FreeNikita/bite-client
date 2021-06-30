import { Button } from '@material-ui/core';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PetContext } from '../context';
import { firebase } from '../../../libs/firebase';
import { PETS_PAGE } from '../../../configs/routing';

const removePet = ({
  images, history, organizationId, id,
}) => {
  const storageRef = firebase.storage().ref();
  images.forEach((file) => storageRef.child(`${organizationId}/${file}`).delete());
  firebase.firestore().collection('pets').doc(id).delete();

  history.push(PETS_PAGE);
};

const Setting = () => {
  const history = useHistory();
  const [values] = useContext(PetContext);
  const {
    organizationId, images, id,
  } = values;

  const removePET = () => {
    removePet({
      history, organizationId, images, id,
    });
  };

  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={removePET}>
        Remove Pet
      </Button>
    </div>
  );
};

export default Setting;
