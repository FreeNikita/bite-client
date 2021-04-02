import { memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { func } from 'prop-types';
import { useHistory } from 'react-router-dom';
import { HOME_PAGE } from '../../configs/routing';

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  title: {
    cursor: 'pointer',
  },
}));

const Header = memo(({ handleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          className={classes.title}
          variant="h6"
          noWrap
          onClick={() => history.push(HOME_PAGE)}
        >
          Bite
        </Typography>
      </Toolbar>
    </AppBar>
  );
});

Header.propTypes = {
  handleDrawer: func,
};

Header.defaultProps = {
  handleDrawer: () => {},
};

export default Header;
