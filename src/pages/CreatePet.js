import { AddPet } from 'modules/Pet';
import { PetProvider } from 'modules/Pet/context';

export default () => (
  <PetProvider>
    <AddPet />
  </PetProvider>
);
