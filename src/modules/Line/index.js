import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { useContext } from 'react';

import { UserContext } from '../../contexts/user';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Line = () => {
  const [values] = useContext(UserContext);
  const { organizationIds } = values;
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          {/* <AddNew /> */}
          {/* {pets.map((pet) => <PetCard key={pet.id} pet={pet} />)} */}
        </Grid>
      </div>
    </div>
  );
};

export default Line;
