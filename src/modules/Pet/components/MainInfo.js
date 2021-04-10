import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { PetContext } from '../context';

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

const MainInfo = ({ onSubmit }) => {
  const classes = useStyles();
  const [values] = useContext(PetContext);
  const { organizationId } = values;

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const submit = async (data) => {
    onSubmit({
      ...data,
      ...(values.id && { id: values.id }),
    });
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

MainInfo.propTypes = {
  onSubmit: func.isRequired,
};

export default MainInfo;
