import AddIcon from '@material-ui/icons/Add';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { Card } from '../Card';
import { ADD_PET_PAGE } from '../../../../configs/routing';

const useStyles = makeStyles(() => ({
  iconNew: {
    fontSize: '8.5rem',
  },
}));

export const AddNew = () => {
  const classes = useStyles();
  const history = useHistory();

  function handleClick() {
    history.push(ADD_PET_PAGE);
  }

  return (
    <Card onClick={handleClick}>
      <div>
        <AddIcon className={classes.iconNew} />
        <Typography variant="h4" component="h4">
          Add New
        </Typography>
      </div>
    </Card>
  );
};
