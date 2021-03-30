import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { routing, HOME_PAGE } from 'configs/routing';
import { Header } from './components/Header';

const useStyles = makeStyles(() => ({
  wrapper: {
    padding: 20,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <div className={classes.wrapper}>

        <Switch>
          {routing.map(({ path, component, exact }) => (
            <Route key={path} path={path} component={component} exact={exact} />
          ))}
          <Redirect to={HOME_PAGE} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
