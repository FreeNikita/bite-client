import {
  useCallback, useContext, useEffect,
} from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { toast } from 'react-toastify';
import { GlobalLoading } from 'components/Loading';
import { fieldId } from 'API';
import PetContent from './PetContent';
import { PET_PAGE } from '../../configs/routing';
import {
  createPet, getPet, updatePet,
} from './API';
import { PetContext, TYPES } from './context';

const Pet = () => {
  const { id } = useParams();
  const history = useHistory();
  const [value, isLoading] = useDocumentData(getPet(id), fieldId);
  const [values, actions] = useContext(PetContext);

  const onSubmit = useCallback((data) => {
    const request = data.id ? updatePet(data) : createPet(data);
    request
      .then((petId) => {
        toast.success('Thank');
        if (petId) history.push(`${PET_PAGE}/${petId}`);
      })
      .catch(() => {
        toast.error('Error');
      });
  }, [history]);

  useEffect(() => {
    if (value) {
      actions.dispatch({ type: TYPES.GET_PET_BY_ID, payload: value });
    }
  }, [actions, value]);

  if (id && (isLoading || !values.id)) return <GlobalLoading />;
  return <PetContent onSubmit={onSubmit} />;
};

export default Pet;
