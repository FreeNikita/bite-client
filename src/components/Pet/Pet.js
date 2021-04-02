import Tabs from 'components/common/Tabs';
import MainInfo from './components/MainInfo';

const settingTabs = [
  {
    label: 'Tab1',
    component: <MainInfo />,
  },
  {
    label: 'Tab2',
    component: <MainInfo />,
  },
];

const Pet = () => <Tabs tabs={settingTabs} />;

export default Pet;
