import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useEffect, useState } from 'react';
import { API } from 'API';
import { firebaseToArray } from 'utils/convert';
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

  useEffect(() => {
    const getData = async () => {
      const petsFromBack = await API.getAllPet() || {};
      setPets(firebaseToArray(petsFromBack));
    };

    getData();
  }, []);

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
