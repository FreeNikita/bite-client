import { useParams } from 'react-router-dom';
import { EditPet, AddPet } from 'modules/Pet';
import { PetProvider } from 'modules/Pet/context';

export default () => {
  const { id } = useParams();
  return (
    <PetProvider>
      {id ? <EditPet /> : <AddPet />}
    </PetProvider>
  );
};
