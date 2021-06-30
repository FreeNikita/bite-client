import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DropZone from 'modules/PhotoEdit';
import { PetContext } from '../context';
import { UserContext } from '../../../contexts/user';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    // justifyContent: 'space-between',
  },
  fieldGroup: {
    display: 'grid',
    flex: 1,
    gridTemplateColumns: '1fr 1fr',
    gridGap: theme.spacing(4),
    padding: theme.spacing(1),
  },
  imgWrapper: {
    display: 'grid',
    grid: 1,
  },
  wrapperButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  },
}));

const fields = [
  {
    name: 'id',
    id: 'id',
    label: 'id',
    disabled: true,
  },
  {
    name: 'name',
    id: 'name',
    label: 'name',
  },
  {
    name: 'status',
    id: 'status',
    label: 'Status',
  },
];

const MainInfo = ({ onSubmit }) => {
  const classes = useStyles();
  const [values] = useContext(PetContext);
  const [{ currentOrganization }] = useContext(UserContext);
  const { imageURL, images, organizationId } = values;

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const submit = async ({ id, ...data }) => {
    onSubmit({
      ...data,
      organizationId: currentOrganization,
      imageURL,
      images,
      ...(values.id && { id: values.id }),
    });
  };

  return (
    <Box>
      <form onSubmit={handleSubmit(submit)}>
        <div className={classes.form}>

          <div className={classes.imgWrapper}>
            <DropZone />
          </div>

          <div className={classes.fieldGroup}>
            {
              fields.map(({
                name, id, label, disabled,
              }) => (
                <TextField
                  inputRef={register}
                  name={name}
                  id={id}
                  label={label}
                  disabled={disabled}
                />
              ))
            }
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
