import {
  useContext, useEffect, useState, useRef, memo,
} from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { firebase } from 'libs/firebase';
import { PetContext } from '../../modules/Pet/context';
import { UPDATE_PET } from '../../modules/Pet/context/reducers/types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
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
    borderRadius: theme.spacing(),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxHeight: '250px',
  },
  img: {
    maxHeight: '100%',
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

  const handleDropZoneChange = (e) => {
    e.preventDefault();
    const { files } = e.dataTransfer;
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
    <div className={classes.container}>
      <input
        type="file"
        onChange={handleChangeFile}
        ref={dropZone}
        className={classes.input}
      />

      {url ? (
        <Box boxShadow={3} className={classes.wrapperImg}>
          <img src={url} className={classes.img} alt="" />
        </Box>
      ) : (
        <div
          aria-hidden="true"
          role="button"
          className={classes.dropzone}
          onDrop={handleDropZoneChange}
          // onDragEnter={() => console.log('onDragEnter')}
          // onDragLeave={() => console.log('onDragLeave')}
          onDragOver={(e) => e.preventDefault()}
          onClick={openFileDialog}
        >
          <div>
            Drag n drop some files here, or click to select files
          </div>
        </div>
      )}
    </div>
  );
});

export default DropZone;
