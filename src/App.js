import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { routing, HOME_PAGE } from 'configs/routing';
import { useState } from 'react';
import { Header } from './components/Header';

const useStyles = makeStyles(() => ({
  wrapper: (isOpen) => ({
    padding: 20,
    width: isOpen ? 'calc(100% - 300px)' : '100%',
  }),
  sidebar: (isOpen) => ({
    width: isOpen ? '300px' : 0,
  })
}));

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const classes = useStyles(isOpen);

  const open = () => setIsOpen(!isOpen);

  return (
    <div>
      <Header onClick={open} />

      <div style={{ display: 'flex' }}>

        {isOpen && <div className={classes.sidebar}>SibeMenu</div>}

        <div className={classes.wrapper}>
          <Switch>
            {routing.map(({ path, component, exact }) => (
              <Route key={path} path={path} component={component} exact={exact} />
            ))}
            <Redirect to={HOME_PAGE} />
          </Switch>
        </div>

      </div>

    </div>
  );
}

export default App;
