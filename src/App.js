import { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import Sidebar from 'components/Sidebar';
import Header from 'components/Header';
import { routing, HOME_PAGE } from './configs/routing';

const useStyles = makeStyles((theme) => {
  console.log('theme', theme);
  return ({
    root: {
      display: 'flex',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  });
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header open={open} handleDrawer={handleDrawer} />
      <Sidebar open={open} handleDrawer={handleDrawer} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Switch>
          {routing.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
          <Redirect to={HOME_PAGE} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
