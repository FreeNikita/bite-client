import PhotoEdit from 'components/PhotoEdit';
import Button from '@material-ui/core/Button';
import Tabs from '../../components/common/Tabs';
import MainInfo from './components/MainInfo';

const PetContent = (props) => {
  console.log('PetContent props', props);

  const { onSubmit } = props;

  const tabs = [
    {
      label: 'test',
      component: () => (
        <div>
          <MainInfo onSubmit={onSubmit} />
        </div>
      ),
    },
  ];

  return (
    <Tabs tabs={tabs} />
  );
};

export default PetContent;
