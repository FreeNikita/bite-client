import { memo, useState } from 'react';
import {
  arrayOf, object, shape, string, oneOfType, element, func,
} from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AntTab from './components/AntTab';
import AntTabs from './components/AntTabs';

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    padding: theme.spacing(2),
  },
}));

const Tabs = memo(({ tabs = [] }) => {
  const classes = useStyles();
  const [tabNumber, setTabNumber] = useState(0);

  return (
    <Box boxShadow={3}>
      <div className={classes.tabs}>
        <AntTabs
          value={tabNumber}
          onChange={(_, value) => setTabNumber(value)}
          aria-label="ant example"
        >
          {tabs.map(({ label }) => (<AntTab key={label} label={label} />))}
        </AntTabs>
        <div className={classes.content}>
          {tabs[tabNumber].component}
        </div>
      </div>
    </Box>
  );
});

Tabs.propTypes = {
  tabs: arrayOf(shape({
    label: string.isRequired,
    component: oneOfType([object, element, func]).isRequired,
  })).isRequired,
};

export default Tabs;
