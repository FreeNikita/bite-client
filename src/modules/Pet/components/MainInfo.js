import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';
import { useContext } from 'react';
import { API } from 'API';
import { PET_PAGE } from 'configs/routing';
import { PetContext } from '../context';
import { UPDATE_PET } from '../context/reducers/types';

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
  const history = useHistory();
  const [values, actions] = useContext(PetContext);
  const { data: pet } = values;
  const classes = useStyles();

  const { register, handleSubmit } = useForm({
    defaultValues: pet,
  });

  const submit = (data) => {
    if (pet.id) {
      API.updatePet({ ...data, id: pet.id }).then(() => {
        actions.dispatch({
          type: UPDATE_PET,
          payload: {
            data,
          },
        });
      });
    } else {
      API.addPet(data).then((res) => {
        history.push(`${PET_PAGE}/${res.name}`);
      });
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
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Box>
  );
};

export default MainInfo;
