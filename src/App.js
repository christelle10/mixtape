import {
    BrowserRouter as Router,
    Route, 
    Switch
}
from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path = "/" component={Login} />
          <Route exact path = "/home" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
