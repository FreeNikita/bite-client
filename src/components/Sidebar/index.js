import { bool } from 'prop-types';
import { useTranslation } from 'react-i18next';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PetsIcon from '@material-ui/icons/Pets';
import { useHistory } from 'react-router-dom';
import { HOME_PAGE, PETS_PAGE } from '../../configs/routing';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: theme.width.sidebar,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: theme.width.sidebar,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
}));

const configHeader = [
  {
    title: 'home',
    link: HOME_PAGE,
    icon: HomeIcon,
  },
  {
    title: 'pets',
    link: PETS_PAGE,
    icon: PetsIcon,
  },
];

const Sidebar = ({ open }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const history = useHistory();

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {configHeader.map(({ title, link, icon: Icon }) => (
          <ListItem
            button
            key={link}
            onClick={() => history.push(link)}
            // selected
          >
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={t(`sidebar.${title}`)} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
};

Sidebar.propTypes = {
  open: bool,
};

Sidebar.defaultProps = {
  open: false,
};

export default Sidebar;
