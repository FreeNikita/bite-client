import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DropZone from 'components/DropZone';
import { PetContext } from '../context';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  fieldGroup: {
    display: 'grid',
    gridGap: theme.spacing(),
    width: '50%',
  },
  imgWrapper: {

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
  const { organizationId, imageURL } = values;

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const submit = async ({ id, ...fields }) => {
    onSubmit({
      ...fields,
      imageURL,
      ...(values.id && { id: values.id }),
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submit)}>
        <div className={classes.form}>
          <div className={classes.fieldGroup}>

            {values.id && (
              <TextField
                inputRef={register}
                name="id"
                id="id"
                label="id"
                disabled
              />
            )}

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

          <div className={classes.imgWrapper}>
            <DropZone />
          </div>
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
