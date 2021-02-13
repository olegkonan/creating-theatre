import { FirebaseDatabaseProvider } from '@react-firebase/database';
import React from 'react';
import firebase from 'firebase/app'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { CreateScenario } from './pages/CreateScenario';
import { ShowScenario } from './pages/ShowScenario';


const firebaseConfig = {
  apiKey: "AIzaSyAR2ffTCaUtpX2Rh1T_ShOlPeFvoUHLwnA",
  authDomain: "create-scenario.firebaseapp.com",
  databaseURL: "https://create-scenario-default-rtdb.firebaseio.com",
  projectId: "create-scenario",
  storageBucket: "create-scenario.appspot.com",
  messagingSenderId: "321267991202",
  appId: "1:321267991202:web:bbc8054643296b97d0cdfb",
  measurementId: "G-5K9CBWKMZ2"
};

function App() {
  return (
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
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
    </FirebaseDatabaseProvider>
  )
}

export default App;
