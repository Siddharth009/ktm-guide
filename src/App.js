import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import {Switch, Route} from 'react-router-dom';
import Home from './/components/pages/Home';
import Contact from './/components/pages/Contact';
import Details from './/components/pages/Details';
import News from './/components/pages/News';
import PageNotFound from './/components/pages/PageNotFound';


function App() {
  return (
    <div classNameNameNameNameName="App">
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/details' component={Details} />
        <Route path='/news' component={News} />
        <Route component={PageNotFound} />
      </Switch>
 
      <Footer/>
    </div>
  );
}

export default App;
