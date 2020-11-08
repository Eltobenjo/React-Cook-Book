import React from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Dessert from './Dessert';
import {Switch, Route, NavLink} from 'react-router-dom'

function Recipes(){
    return <div classname ='main'>


<div classname ='nav'>
<NavLink to ='/Breakfast'>Breakfast</NavLink>
<NavLink to ='/Lunch'>Lunch</NavLink>
<NavLink to ='/Dinner'>Dinner</NavLink>
<NavLink to ='/Dessert'>Dessert</NavLink>
</div>


<Switch>
    <Route path='/Breakfast'><Breakfast /></Route>
    <Route path='/Lunch'><Lunch /></Route>
    <Route path='/Dinner'><Dinner /></Route>
    <Route path='/Dessert'><Dessert /></Route>
    </Switch>





</div>



}




export default Recipes; 