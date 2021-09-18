import './App.css';
import Pirates from './views/allPirates';
import PirateForm from './components/PirateForm';
import SinglePirate from './views/singlePirate';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/pirates">
            <div className="navbar navbar-light bg-light">
              <h1>Pirate Crew</h1>
              <Link to="/pirates/new" className="btn btn-primary">Add Pirate</Link>
            </div>
            <Pirates />
          </Route>

          <Route exact path="/pirates/new">
            <div className="navbar navbar-light bg-light">
              <h1>Add Pirate</h1>
              <Link to="/pirates" className="btn btn-primary">Crew Board</Link>
            </div>
            <PirateForm />
          </Route>

          <Route exact path="/pirates/:_id">
            <SinglePirate/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
