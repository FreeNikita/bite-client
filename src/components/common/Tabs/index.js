import { memo, useState } from 'react';
import {
  arrayOf, object, shape, string, oneOfType, element, func,
} from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { useTranslation } from 'react-i18next';
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

const Tabs = memo(({ tabs = [], ...props }) => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [tabNumber, setTabNumber] = useState(0);
  const content = tabs[tabNumber].component(props);

  return (
    <Box boxShadow={3}>
      <div className={classes.tabs}>
        <AntTabs
          value={tabNumber}
          onChange={(_, value) => setTabNumber(value)}
          aria-label="ant example"
        >
          {tabs.map(({ label }) => (<AntTab key={label} label={t(label)} />))}
        </AntTabs>
        <div className={classes.content}>
          {content}
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
