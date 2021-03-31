import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AddNew from './components/AddNew';
import PetCard from './components/PetCard';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const arr = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
];

const Line = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <AddNew />
          {arr.map(({ id }) => <PetCard key={id} />)}
        </Grid>
      </div>
    </div>
  );
};

export default Line;
