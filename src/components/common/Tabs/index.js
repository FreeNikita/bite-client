import { memo, useState } from 'react';
import {
  arrayOf, object, shape, string, oneOfType,
} from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AntTab from './components/AntTab';
import AntTabs from './components/AntTabs';
import TabPanel from './components/TabPanel';

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
  },
}));

const Tabs = memo(({ tabs = [] }) => {
  const [tabNumber, setTabNumber] = useState(0);
  const classes = useStyles();

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
        <TabPanel>
          {tabs[tabNumber].component}
        </TabPanel>
      </div>
    </Box>
  );
});

Tabs.propTypes = {
  tabs: arrayOf(shape({
    label: string.isRequired,
    component: oneOfType([object]).isRequired,
  })).isRequired,
};

export default Tabs;
