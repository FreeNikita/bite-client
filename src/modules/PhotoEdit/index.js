import { useRef, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { func, string } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  container: {
    width: 300,
  },
  wrapperImg: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    cursor: 'pointer',
  },
  border: {
    borderRadius: theme.spacing(2),
    borderColor: theme.palette.grey[400],
    borderWidth: 2,
    borderStyle: 'solid',
  },
  img: {
    width: '100%',
    borderRadius: theme.spacing(2),
  },
  input: {
    display: 'none',
  },
}));

const ImageContainer = memo(({ url, upload }) => {
  const classes = useStyles();
  const dropZone = useRef(null);

  const openFileDialog = (e) => {
    e.preventDefault();
    dropZone.current.click();
  };

  const handleChangeFile = ({ target: { files } }) => upload(files[0]);

  return (
    <div className={classes.container}>
      <input
        className={classes.input}
        onChange={handleChangeFile}
        ref={dropZone}
        type="file"
        accept=".jpg, .jpeg, .png"
      />
      <div
        className={`${classes.wrapperImg}  ${!url && classes.border}`}
        onClick={openFileDialog}
        role="button"
        tabIndex={0}
      >
        { url ? (
          <img className={classes.img} src={url} alt="" />
        ) : (
          <div>Click to add photo</div>
        )}
      </div>
    </div>
  );
});

ImageContainer.propTypes = {
  url: string.isRequired,
  upload: func.isRequired,
};

export default ImageContainer;
