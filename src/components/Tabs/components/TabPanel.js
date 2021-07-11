import { memo } from 'react';
import { element } from 'prop-types';
import Box from '@material-ui/core/Box';

const TabPanel = memo(({
  children,
}) => (
  <Box p={3}>
    {children}
  </Box>
));

TabPanel.propTypes = {
  children: element.isRequired,
};

export default TabPanel;
