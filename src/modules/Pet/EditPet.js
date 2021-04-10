import {
  memo, useCallback, useContext, useEffect,
} from 'react';
import { useParams } from 'react-router-dom';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firebase } from 'libs/firebase';
import { GlobalLoading } from 'components/Loading';
import PetContent from './PetContent';
import { PetContext } from './context';
import { GET_PET_BY_ID } from './context/reducers/types';

const Pet = memo(() => {
  const { id } = useParams();
  const [values, actions] = useContext(PetContext);
  const { organizationId } = values;

  const [value, isLoading] = useDocumentData(
    firebase.firestore().doc(`pets/${id}`),
    {
      idField: 'id',
    },
  );

  useEffect(() => {
    if (value) {
      actions.dispatch({ type: GET_PET_BY_ID, payload: { ...value } });
    }
  }, [actions, value]);

  const onSubmit = useCallback((data) => {
    firebase.firestore().collection('pets').doc(data.id).update({
      ...data,
    });
  }, []);

  if (isLoading || !organizationId) return <GlobalLoading />;

  return (
    <PetContent onSubmit={onSubmit} />
  );
});

export default Pet;
