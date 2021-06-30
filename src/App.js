import React, { useContext, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Sidebar from 'modules/Sidebar';
import Header from 'modules/Header';
import { GlobalLoading } from 'components/Loading';

import { routing, HOME_PAGE } from 'configs/routing';
import { isDev } from 'configs/main';
import { UserContext } from 'contexts/user';

const useStyles = makeStyles((theme) => {
  if (isDev) {
    console.log('theme', theme);
  }

  return ({
    root: {
      display: 'flex',
    },
    contentWrapper: {
      flexGrow: 1,
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
    },
  });
});

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [values] = useContext(UserContext);
  const { isLoading } = values;

  const handleDrawer = () => {
    setOpen(!open);
  };

  if (isLoading) {
    return <GlobalLoading />;
  }

  return (
    <div className={classes.root}>
      <Header open={open} handleDrawer={handleDrawer} />
      <Sidebar open={open} handleDrawer={handleDrawer} />
      <div className={classes.contentWrapper}>
        <div className={classes.toolbar} />
        <main className={classes.content}>
          <Switch>
            {routing.map(({ path, component, exact }) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))}
            <Redirect to={HOME_PAGE} />
          </Switch>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </div>
  );
}

export default App;
