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

const Pet = () => <Tabs tabs={settingTabs} />;

export default Pet;
