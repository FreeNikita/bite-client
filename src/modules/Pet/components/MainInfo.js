import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { func } from 'prop-types';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { nanoid } from 'nanoid';
import { firebase } from 'libs/firebase';
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

  const [file, setFile] = useState(null);
  const [url, setURL] = useState('');

  const { register, handleSubmit } = useForm({
    defaultValues: values,
  });

  const submit = async ({ id, ...fields }) => {
    onSubmit({
      ...fields,
      imageURL: url,
      ...(values.id && { id: values.id }),
    });
  };

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();

    const storageRef = firebase.storage().ref();

    const uploadTask = storageRef.child(`/${organizationId}/${nanoid()}.${file.name.split('.')[1]}`).put(file);

    uploadTask.on('state_changed',
      (snapshot) => {},
      (error) => {},
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          setURL(downloadURL);
        });
      });
  }

  return (
    <Box>
      <form onSubmit={handleSubmit(submit)}>
        <div className={classes.form}>
          <TextField
            inputRef={register}
            name="id"
            id="id"
            label="id"
            disabled
          />

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

      <form onSubmit={handleUpload}>
        <input type="file" onChange={handleChange} />
        <button disabled={!file}>upload to firebase</button>
      </form>
      <img src={url} alt="" />

    </Box>
  );
};

MainInfo.propTypes = {
  onSubmit: func.isRequired,
};

export default MainInfo;
