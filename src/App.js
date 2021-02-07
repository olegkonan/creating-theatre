import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { CreateScenario } from './pages/CreateScenario';
import { Main } from './pages/Main';
import { ShowScenario } from './pages/ShowScenario';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path={'/'} component={Main} />
          <Route path={'/creation'} exact component={CreateScenario} />
          <Route path={'/scenario'} component={ShowScenario} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
