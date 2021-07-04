import { memo } from 'react';
import Tabs from '../../components/Tabs';
import MainInfo from './components/MainInfo';
import Setting from './components/Setting';

const PetContent = memo(() => {
  const tabs = [
    {
      label: 'pet.main',
      component: () => <MainInfo />,
    },
    {
      label: 'pet.setting',
      component: () => <Setting />,
    },
  ];

  return (
    <Tabs tabs={tabs} />
  );
});

export default PetContent;
