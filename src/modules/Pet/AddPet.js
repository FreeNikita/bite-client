import {
  memo, useCallback, useContext, useEffect,
} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firebase } from 'libs/firebase';
import PetContent from './PetContent';
import { PET_PAGE } from '../../configs/routing';
import { PetContext } from './context';
import { UPDATE_PET } from './context/reducers/types';

const AddPet = memo(() => {
  const [values, action] = useContext(PetContext);
  const params = useLocation();
  const history = useHistory();
  const { search } = params;
  const { organizationId } = values;

  useEffect(() => {
    const orgId = search.split('=')[1];
    if (!organizationId) {
      action.dispatch({ type: UPDATE_PET, payload: { organizationId: orgId } });
    }
  }, [action, organizationId, search]);

  const onSubmit = useCallback((data) => {
    const submit = async () => {
      const res = await firebase.firestore().collection('pets').add({
        ...data,
      });
      history.push(`${PET_PAGE}/${res.id}`);
    };

    submit();
  }, [history]);

  return (
    <PetContent onSubmit={onSubmit} />
  );
});

export default AddPet;
