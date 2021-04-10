import Tabs from 'components/common/Tabs';
import MainInfo from './components/MainInfo';

const settingTabs = [
  {
    label: 'pet.main',
    component: (props) => <MainInfo {...props} />,
  },
  {
    label: 'demo',
    component: (props) => <MainInfo {...props} />,
  },
];

const PetContent = (props) => (
  <Tabs tabs={settingTabs} {...props} />
);

export default PetContent;
