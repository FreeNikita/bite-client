import { memo } from 'react';
import { string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { Loading } from 'components/Loading';
import { fieldId } from 'API';
import PetCard from '../PetCard';
import AddNew from '../AddNew';
import { getAllOrganizationPets } from '../../API/requests';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
  title: {
    marginBottom: theme.spacing(1),
    textDecoration: 'underline',
    marginRight: theme.spacing(2),
  },
  wrapperLine: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    width: '100%',
  },
}));

const PetsLine = memo(({ id }) => {
  const classes = useStyles();

  const [value, isLoading] = useCollectionData(
    getAllOrganizationPets(id),
    fieldId,
  );

  if (isLoading) return <Loading />;

  return (
    <Grid container spacing={3} className={classes.wrapperLine}>
      <AddNew id={id} />
      {value.map((pet) => <PetCard key={pet.id} pet={pet} />)}
    </Grid>
  );
});

PetsLine.propTypes = {
  id: string.isRequired,
};

export default PetsLine;
