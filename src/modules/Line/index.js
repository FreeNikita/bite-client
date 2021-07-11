import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';

import { UserContext } from 'contexts/user';
import PetsLine from './components/PetsLine';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

const Line = () => {
  const [{ currentOrganization }] = useContext(UserContext);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <PetsLine id={currentOrganization} />
    </div>
  );
};

export default Line;
