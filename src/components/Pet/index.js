import { useHistory } from 'react-router-dom';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tabs from 'components/common/Tabs';
import { HOME_PAGE } from 'configs/routing';

const Pet = () => {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    history.push(HOME_PAGE);
  };

  const tabs = [
    {
      label: 'Tab1',
      component: <div> Item One </div>,
    },
    {
      label: 'Tab2',
      component: <div> Item Two </div>,
    },
  ];

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="inherit" href={HOME_PAGE} onClick={handleClick}>
          Home
        </Link>
        <Typography color="textPrimary">Breadcrumb</Typography>
      </Breadcrumbs>

      <Tabs tabs={tabs} />

    </div>
  );
};

export default Pet;
