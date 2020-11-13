import React from 'react'
import Info from './Info'
import {Switch, Route, Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='center'>
    
  <Link to='/RecipeGrid'>   <img src='../../img/logo.png' alt='' /></Link> 

   <img className='banner' src='../../img/veganbanner.jpg' width='500px' alt=''/>
 <Link to='/Info'>  <img src='../../img/goVegan.png' alt='' /></Link>
      
      
    </header>
  )
}

export default Header