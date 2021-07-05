import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { PET_PAGE } from 'configs/routing';
import logo from 'assets/default_pet.png';
import { shape, string } from 'prop-types';
import Card from '../Card';

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
    height: '200px',
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

const PetCard = ({ pet }) => {
  const classes = useStyles();
  const {
    id, name, imageURL,
  } = pet;

  const history = useHistory();
  function handleClick() {
    history.push(`${PET_PAGE}/${id}`);
  }

  return (
    <Card withoutPadding>
      <div
        role="presentation"
        className={classes.container}
        onClick={handleClick}
      >
        <div className={classes.card}>
          <img
            alt=""
            src={imageURL || logo}
            className={classes.image}
          />

          <div className={classes.info}>
            <div className={classes.title}>
              {name}
            </div>
            <div className={classes.description}>
              Short Description
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

PetCard.propTypes = {
  pet: shape({
    id: string.isRequired,
    name: string.isRequired,
  }).isRequired,
};

export default PetCard;
