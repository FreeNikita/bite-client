import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import PetContent from './Pet';

import { PetContext } from './context';
import { API } from '../../API';
import { GET_PET_BY_ID, LOADING_FINISH } from './context/reducers/types';

const Pet = () => {
  const { id } = useParams();
  const [values, actions] = useContext(PetContext);
  const { isLoading } = values;

  useEffect(() => {
    if (id) {
      API.getPetById(id).then((data) => {
        actions.dispatch({ type: GET_PET_BY_ID, payload: { data } });
      });
    } else {
      actions.dispatch({ type: LOADING_FINISH });
    }
  }, [actions, id]);

  if (isLoading) return <div>Loading_123</div>;

  return (
    <PetContent />
  );
};

export default Pet;
