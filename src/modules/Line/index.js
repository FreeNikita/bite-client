import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { firebase } from 'libs/firebase';
import AddNew from './components/AddNew';
import PetCard from './components/PetCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Line = () => {
  const classes = useStyles();
  const [pets, setPets] = useState([]);
  const [value, loading, error] = useCollectionData(
    firebase.firestore().collection('pets'),
    {
      idField: 'id',
      snapshotListenOptions: { includeMetadataChanges: true },
    },
  );

  useEffect(() => {
    if (Array.isArray(value)) {
      setPets(value);
    }
  }, [value]);

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <AddNew />
          {pets.map((pet) => <PetCard key={pet.id} pet={pet} />)}
        </Grid>
      </div>
    </div>
  );
};

export default Line;
