import PetContent from 'modules/Pet';
import { PetProvider } from 'modules/Pet/context';

export default () => (
  <PetProvider>
    <PetContent />
  </PetProvider>
);
