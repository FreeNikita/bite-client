import { memo } from 'react';
import { string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Loading } from 'components/Loading';
import { fieldId } from 'API';
import PetCard from '../PetCard';
import AddNew from '../AddNew';
import { getAllOrganizationPets } from '../../API/requests';

const PetsLine = memo(({ id }) => {
  const [value, isLoading] = useCollectionData(
    getAllOrganizationPets(id),
    fieldId,
  );

  if (isLoading) return <Loading />;

  return (
    <Grid container spacing={3}>
      <AddNew id={id} />
      {value.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </Grid>
  );
});

PetsLine.propTypes = {
  id: string.isRequired,
};

export default PetsLine;
