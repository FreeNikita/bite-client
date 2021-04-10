import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { PET_PAGE } from 'configs/routing';
import { PetContext } from '../context';
import { firebase } from '../../../libs/firebase';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'grid',
    maxWidth: 500,
    gridGap: theme.spacing(),
  },
  wrapperButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const MainInfo = () => {
  const params = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [values] = useContext(PetContext);
  const { organizationId } = values;

  const { search } = params;

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const submit = async (data) => {
    if (organizationId) {
      await firebase.firestore().collection('pets').doc(values.id).update({
        ...data,
      });
    } else {
      const [, orgId] = search.split('=');
      const res = await firebase.firestore().collection('pets').add({
        ...data,
        organizationId: orgId,
      });
      history.push(`${PET_PAGE}/${res.id}`);
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submit)}>
        <div className={classes.form}>
          <TextField
            inputRef={register}
            name="name"
            id="name"
            label="Name"
          />

          <TextField
            inputRef={register}
            name="age"
            id="age"
            label="Age"
          />

          <TextField
            inputRef={register}
            name="breed"
            id="breed"
            label="Breed"
          />
        </div>
        <div className={classes.wrapperButton}>
          <Button type="submit">
            {organizationId ? 'Update' : 'Create'}
          </Button>
        </div>
      </form>
    </Box>
  );
};

export default MainInfo;
