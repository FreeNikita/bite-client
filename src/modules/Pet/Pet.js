import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { GlobalLoading } from 'components/Loading';
import { fieldId } from 'API';
import PetContent from './PetContent';
import { getPet } from './API';
import { PetContext, TYPES } from './context';

const Pet = () => {
  const { id } = useParams();
  const [value, isLoading] = useDocumentData(getPet(id), fieldId);
  const [values, actions] = useContext(PetContext);

  useEffect(() => {
    if (value) {
      actions.dispatch({ type: TYPES.GET_PET_BY_ID, payload: value });
    }
  }, [actions, value]);

  if (id && (isLoading || !values.id)) return <GlobalLoading />;
  return <PetContent />;
};

export default Pet;
