import { Switch, Route } from 'react-router-dom';
import { routing } from 'configs/routing';

function App() {
  return (
    <div className="App">
      <Switch>
        {routing.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
    </div>
  );
}

export default App;
