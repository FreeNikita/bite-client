import PetContent from 'components/Pet';
import { PetProvider } from 'components/Pet/context';

export default () => (
  <PetProvider>
    <PetContent />
  </PetProvider>
);
