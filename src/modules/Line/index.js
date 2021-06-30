import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';

import { UserContext } from 'contexts/user';
import PetsLine from './components/PetsLine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    cursor: 'pointer',
    marginBottom: theme.spacing(1),
  },
}));

const Line = () => {
  const [{ currentOrganization }] = useContext(UserContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.titleWrapper} />
      <PetsLine id={currentOrganization} />
    </div>
  );
};

export default Line;
