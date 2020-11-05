import React from 'react';
import {Switch, Route, NavLink} from 'react-router-dom'
import './App.css';
import List from './List';
import Detail from './Detail';

function App() {
  return (
    <div className="App">
<NavLink to ='/List'>List</NavLink>
<NavLink to ='/Detail'>Detail</NavLink>


    <Switch>
    <Route path='/Detail'><Detail /></Route>
    <Route path='/List'><List /></Route>
    </Switch>
    </div>
  );
}

export default App;
