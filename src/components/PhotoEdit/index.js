import {
  useContext, useEffect, useState, useRef, memo,
} from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { firebase } from 'libs/firebase';
import Button from '@material-ui/core/Button';
import { PetContext } from '../../modules/Pet/context';
import { UPDATE_PET } from '../../modules/Pet/context/reducers/types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
    height: 350,
    overflow: 'hidden',
    borderRadius: theme.spacing(),
  },
  dropzone: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: theme.spacing(),
    border: '2px dashed #3f51b5',
    padding: theme.spacing(),
  },
  wrapperImg: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 300,
  },
  img: {
    height: '100%',
  },
  wrapperButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
  },
  btn: {
    height: '100%',
    width: '100%',
  },
  input: {
    display: 'none',
  },
}));

const DropZone = memo(() => {
  const classes = useStyles();
  const dropZone = useRef(null);
  const [values, action] = useContext(PetContext);
  const { organizationId, imageURL } = values;

  const [file, setFile] = useState(null);
  const [url, setURL] = useState(imageURL);

  const openFileDialog = (e) => {
    e.preventDefault();
    dropZone.current.click();
  };

  const handleChangeFile = (e) => {
    const { files } = e.target;
    setFile(files[0]);
  };

  useEffect(() => {
    if (file) {
      const storageRef = firebase.storage().ref();
      const type = file.name.split('.')[1];

      const uploadTask = storageRef
        .child(`/${organizationId}/${nanoid()}.${type}`)
        .put(file);

      uploadTask.on('state_changed',
        () => {},
        () => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((URL) => {
            setURL(URL);
            action.dispatch({ type: UPDATE_PET, payload: { imageURL: URL } });
          });
        });
    }
  }, [action, file, organizationId]);

  return (
    <Box boxShadow={3} className={classes.container}>
      <input
        type="file"
        onChange={handleChangeFile}
        ref={dropZone}
        className={classes.input}
      />

      <Box className={classes.wrapperImg}>
        <img src={url} className={classes.img} alt="" />
      </Box>

      <div className={classes.wrapperButton}>
        <Button
          className={classes.btn}
          onClick={openFileDialog}
        >
          Update
        </Button>
      </div>
    </Box>
  );
});

export default DropZone;
