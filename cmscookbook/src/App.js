import React from 'react';
import {Switch, Route,NavLink} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Contact from './components/Contact';
import Recipes from './components/Recipes';
import Footer from'./components/Footer';






function App() {
 
  return (
    <div className="App">
    <Header />
  <NavLink to ='/Home'>Home</NavLink>

<NavLink to ='/Contact'>Contact</NavLink>
    
<Recipes />
<Footer />
    <Switch>
    <Route path='/Contact'><Contact /></Route>
    <Route path='/Home'><Home /></Route>
    <Route path='/Recipes'><Recipes /></Route>
    </Switch>
    </div>

  );
}

export default App;
