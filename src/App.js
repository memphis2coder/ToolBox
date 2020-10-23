import React from 'react';
import './App.css';
//import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// pages
// import HomePage from './pages/home/home-page';
// import Navbars from './pages/navbars/navbar-page';
// import Buttons from './pages/buttons/buttons-page';
// // components
// import MainMenu from './components/main-menu/main-menu';
// import Sidebar from './components/sidebar/sidebar';
import Title from './Title.js';


function App() {
  return (
    <div className="App">
      {/* <Router>
        <MainMenu />
          <Switch>
          <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/navbars'>
              <Navbars />
            </Route>
            <Route path='/buttons'>
              <Buttons />
            </Route>
          </Switch>
      </Router> */}
      <Title />
    </div>
  );
}

export default App;
