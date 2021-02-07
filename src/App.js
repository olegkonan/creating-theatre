import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CreateScenario } from './pages/CreateScenario';
import { ShowScenario } from './pages/ShowScenario';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container-lg">
        <Switch>
          <Route path={'/'} exact component={CreateScenario} />
          <Route path={'/scenario'} component={ShowScenario} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
