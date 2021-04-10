import { useState, memo } from 'react';
import { string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { firebase } from 'libs/firebase';
import { Loading } from 'components/Loading';
import PetsLine from '../PetsLine';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  titleWrapper: {
    display: 'flex',
    alignItems: 'baseline',
    cursor: 'pointer',
    marginBottom: theme.spacing(1),
  },
  title: {
    textDecoration: 'underline',
    marginRight: theme.spacing(2),
  },
  wrapperLine: {
    marginBottom: theme.spacing(2),
  },
  divider: {
    width: '100%',
  },
}));

const Organizations = memo(({ id }) => {
  const classes = useStyles();
  const [isShowAll, setIsShowAll] = useState(false);

  const [value, isLoading] = useDocumentData(
    firebase.firestore().doc(`organizations/${id}`),
  );

  if (isLoading) return <Loading />;

  const { name } = value || {};

  return (
    <Grid container spacing={3} className={classes.container}>
      <div
        className={classes.titleWrapper}
        onMouseEnter={() => setIsShowAll(true)}
        onMouseLeave={() => setIsShowAll(false)}
      >
        <Typography
          variant="h5"
          component="h5"
          className={classes.title}
        >
          {name}
        </Typography>
        {isShowAll && (
          <Typography>
            Show All
          </Typography>
        )}
      </div>
      <PetsLine id={id} />
      <Divider className={classes.divider} />
    </Grid>
  );
});

Organizations.propTypes = {
  id: string.isRequired,
};

export default Organizations;
