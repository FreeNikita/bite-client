import Tabs from 'components/common/Tabs';
import MainInfo from './components/MainInfo';

const settingTabs = [
  {
    label: 'pet.main',
    component: <MainInfo />,
  },
  {
    label: 'demo',
    component: <MainInfo />,
  },
];

const PetContent = () => (
  <Tabs tabs={settingTabs} />
);

export default PetContent;
