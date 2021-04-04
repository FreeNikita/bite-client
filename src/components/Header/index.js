import { memo } from 'react';
import { useHistory } from 'react-router-dom';
import { func } from 'prop-types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { HOME_PAGE } from 'configs/routing';
import { firebase } from 'libs/firebase';

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
    flexGrow: 1,
  },
}));

const Header = memo(({ handleDrawer }) => {
  const classes = useStyles();
  const history = useHistory();
  const { auth, signOut, loginGoogle } = firebase;
  const [user] = useAuthState(auth());
  const handlerAuth = user ? signOut : loginGoogle;

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
        <Button
          color="inherit"
          onClick={handlerAuth}
        >
          {user ? 'Logout' : 'Login'}
        </Button>
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
