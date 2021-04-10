import { memo, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { firebase } from 'libs/firebase';
import PetContent from './PetContent';
import { PET_PAGE } from '../../configs/routing';

const AddPet = memo(() => {
  const params = useLocation();
  const history = useHistory();
  const { search } = params;

  const onSubmit = useEffect((data) => {
    const submit = async () => {
      const [, orgId] = search.split('=');
      const res = await firebase.firestore().collection('pets').add({
        ...data,
        organizationId: orgId,
      });
      history.push(`${PET_PAGE}/${res.id}`);
    };

    submit();
  }, [history, search]);

  return (
    <PetContent onSubmit={onSubmit} />
  );
});

export default AddPet;
