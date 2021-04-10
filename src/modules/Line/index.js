import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';

import { UserContext } from '../../contexts/user';
import Organizations from './components/Organizations';

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
    <div className={classes.root}>
      {organizationIds.map((id) => <Organizations id={id} key={id} />)}
    </div>
  );
};

export default Line;
