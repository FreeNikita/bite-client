import {
  useContext, useEffect, useState, useRef, memo,
} from 'react';
import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
import { firebase } from 'libs/firebase';
import { PetContext } from '../Pet/context';
import { UPDATE_PET } from '../Pet/context/types';
import { UserContext } from '../../contexts/user';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
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
    height: 300,
    display: 'flex',
    borderRadius: theme.spacing(2),
    overflow: 'hidden',
    cursor: 'pointer',
  },
  img: {
    width: '100%',
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
  const [{ currentOrganization }] = useContext(UserContext);
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
      const type = file.name.split('.').pop();
      const fileName = `${nanoid()}.${type}`;

      const uploadTask = storageRef
        .child(`/${currentOrganization}/${fileName}`)
        .put(file);

      uploadTask.on('state_changed',
        () => {},
        () => {},
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((URL) => {
            setURL(URL);
            action.dispatch({
              type: UPDATE_PET,
              payload: {
                imageURL: URL,
                fileName,
              },
            });
          });
        });
    }
  }, [action, currentOrganization, file, organizationId]);

  return (
    <div className={classes.container}>
      <input
        type="file"
        onChange={handleChangeFile}
        ref={dropZone}
        className={classes.input}
      />

      <div
        className={classes.wrapperImg}
        onClick={openFileDialog}
        role="button"
      >
        <img
          src={url}
          className={classes.img}
          alt=""
        />
      </div>
    </div>
  );
});

export default DropZone;
