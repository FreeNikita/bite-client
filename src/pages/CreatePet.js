import PetContent from 'modules/Pet/PetContent';
import { PetProvider } from 'modules/Pet/context';

export default () => (
  <PetProvider>
    <PetContent />
  </PetProvider>
);
