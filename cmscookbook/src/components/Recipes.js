import React from 'react';
import Breakfast from './FenchToast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import Dessert from './Dessert';
import {Switch, Route, NavLink} from 'react-router-dom'

function Recipes(){
    return <div className ='main'>

    

<div className ='nav'>

<NavLink to ='/Breakfast'>Breakfast</NavLink>


<NavLink to ='/Lunch'>Lunch</NavLink>
<NavLink to ='/Dinner'>Dinner</NavLink>
<NavLink to ='/Dessert'>Dessert</NavLink>



<Switch>
    <Route path='/Breakfast'><Breakfast /></Route>
    <Route path='/Lunch'><Lunch /></Route>
    <Route path='/Dinner'><Dinner /></Route>
    <Route path='/Dessert'><Dessert /></Route>
    </Switch>



</div>

</div>



}




export default Recipes; 