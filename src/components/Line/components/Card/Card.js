import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 300,
    width: 250,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:active': {
      transform: 'scale(0.98)',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  defaultPadding: {
    padding: 0,
  },
}));

export const Card = ({ children, withoutPadding, onClick }) => {
  const classes = useStyles();
  const cardStyle = `${classes.paper} ${withoutPadding && classes.defaultPadding}`;
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={3}
      xl={2}
      onClick={onClick}
    >
      <div className={classes.container}>
        <Paper className={cardStyle} elevation={3}>
          {children}
        </Paper>
      </div>
    </Grid>
  );
};
