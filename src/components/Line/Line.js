import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { AddNew } from './components/AddNew';
import { PetCard } from './components/PetCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

export const Line = () => {
  const classes = useStyles();
  const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>

          <AddNew />
          {arr.map(() => <PetCard />)}
        </Grid>
      </div>
    </div>
  );
};
