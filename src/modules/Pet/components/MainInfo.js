import { useCallback, useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DropZone from 'modules/PhotoEdit';
import { PetContext, TYPES } from '../context';
import { UserContext } from '../../../contexts/user';
import { addPhoto, createPet, updatePet } from '../API/requests';
import { PET_PAGE } from '../../../configs/routing';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
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

const formFields = [
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

const MainInfo = () => {
  const history = useHistory();
  const classes = useStyles();
  const [values, action] = useContext(PetContext);
  const [{ currentOrganization }] = useContext(UserContext);
  const { imageURL, organizationId, id } = values;

  const { register, handleSubmit } = useForm({ defaultValues: values });

  const uploadPhoto = (file) => {
    const callback = (URL) => {
      action.dispatch({
        type: TYPES.ADD_PHOTO,
        payload: { imageURL: URL },
      });
      toast.info('Click update to save photo');
    };

    addPhoto({
      file,
      orgId: currentOrganization,
      callback,
    });
  };

  const onSubmit = useCallback((fields) => {
    const data = {
      ...values,
      ...fields,
      organizationId: currentOrganization,
      ...(id && { id }),
    };
    const request = id ? updatePet : createPet;
    request(data)
      .then(({ id: petID } = {}) => {
        console.log('petId', id);
        toast.success('Thank');
        if (petID) history.push(`${PET_PAGE}/${petID}`);
      })
      .catch((res) => {
        console.log('res', res);
        toast.error('Error');
      });
  }, [currentOrganization, history, id, values]);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={classes.form}>
          <div className={classes.imgWrapper}>
            <DropZone url={imageURL} upload={uploadPhoto} />
          </div>

          <div className={classes.fieldGroup}>
            {formFields.map((item) => (
              <TextField
                key={item.id}
                id={item.id}
                inputRef={register}
                name={item.name}
                label={item.label}
                InputProps={item.InputProps}
              />
            ))}
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

export default MainInfo;
