import React from 'react';
import {NavLink} from 'react-router-dom'


function Navbar (){
    return(
    
<div className ='nav'>
 <NavLink to ='/Home'>Home</NavLink>

<NavLink to ='/Contact'>Contact</NavLink>

<NavLink to ='/Info'>Info</NavLink>
       </div>
    ) ;     
}

export default Navbar;