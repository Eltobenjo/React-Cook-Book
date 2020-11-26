import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RecipeGrid from './components/RecipeGrid'
import Info from './components/Info'
import './App.css'
import {Switch, Route} from 'react-router-dom'





function App() {
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
   
     fetch('http://localhost:4000' )
     
       .then(res => res.json())
        .then(res =>{setRecipes(res.recipes)
        console.log(res)}
       );
       



      
       
  },[]);


  return (
    <div className='container'>
      <Header />
      
  
  
<Switch>
<Route path='/RecipeGrid'><RecipeGrid  recipes={recipes} /></Route>
      <Route path='/Info'><Info /></Route>
    
      </Switch>
      <Footer/>
    </div>
  )
}

export default App