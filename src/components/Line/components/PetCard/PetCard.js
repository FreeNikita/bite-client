import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import logo from '../../../../assets/default_pet.png';
import { Card } from '../Card';
import { PET_PAGE } from '../../../../configs/routing';

const useStyles = makeStyles(() => ({
  container: {
    height: '100%',
    width: '100%',
  },
  card: {
    display: 'grid',
    justifyContent: 'space-around',
    gridTemplateRows: '12fr 3fr 2fr 4fr',
    height: '100%',
  },
  image: {
    width: '250px',
    height: '100%',
    objectFit: 'cover',
  },
  info: {
    padding: '4px 8px',
  },
  title: {
    fontSize: '20px',
    fontWeight: 700,
    textAlign: 'initial',
  },
  description: {
    fontSize: '16px',
    textAlign: 'initial',
  },
  status: {
    display: 'flex',
    justifyContent: 'space-around',
    textAlign: 'initial',
  },
}));

export const PetCard = () => {
  const classes = useStyles();

  const id = '1';
  const history = useHistory();
  function handleClick() {
    history.push(`${PET_PAGE}/${id}`);
  }

  return (
    <Card withoutPadding>
      <div className={classes.container} onClick={handleClick}>
        <div className={classes.card}>
          <img
            alt=""
            src={logo}
            className={classes.image}
          />
          <div className={classes.info}>
            <div className={classes.title}>
              Name
            </div>
            <div className={classes.description}>
              Short Discription
            </div>
          </div>

          {/* <div className={classes.status}> */}
          {/*  <AccessibleIcon color="primary" /> */}
          {/*  <AccessibleIcon color="secondary" /> */}
          {/* </div> */}
        </div>
      </div>

    </Card>
  );
};
