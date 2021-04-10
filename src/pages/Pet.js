import { EditPet } from 'modules/Pet';
import { PetProvider } from 'modules/Pet/context';

export default () => (
  <PetProvider>
    <EditPet />
  </PetProvider>
);
