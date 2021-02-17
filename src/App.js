// import logo from './logo.svg';
import './App.scss';

import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import Home from './components/Home';
import About from './components/pages/About';
import Beats from './components/pages/Beats';
import Account from './components/pages/Account';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Navbar />
    <Switch>
      <Route path='/' component={Home} exact></Route>
      <Route path='/about' component={About}></Route>
      <Route path='/beats' component={Beats}></Route>
      <Route path='/account' component={Account}></Route>
      <Route component={Error}></Route>
    </Switch>
    </>



  );
}

export default App;
