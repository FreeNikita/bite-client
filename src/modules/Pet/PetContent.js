import { func } from 'prop-types';
import Tabs from '../../components/Tabs';
import MainInfo from './components/MainInfo';
import Setting from './components/Setting';

const PetContent = ({ onSubmit }) => {
  const tabs = [
    {
      label: 'pet.main',
      component: () => <MainInfo onSubmit={onSubmit} />,
    },
    {
      label: 'pet.setting',
      component: () => <Setting />,
    },
  ];

  return (
    <Tabs tabs={tabs} />
  );
};

PetContent.propTypes = {
  onSubmit: func.isRequired,
};

export default PetContent;
