import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RecipeGrid from './components/RecipeGrid'
import Home from './components/Home'
import './App.css'
import {Switch, Route} from 'react-router-dom'
import {client} from './components/Client'


function App() {
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
   
    client.getEntries().then((entries) => {
      setRecipes(entries.items);
      console.log(entries);
    });
            
  },[]);


  return (
    <div className='container'>
      <Header />
      
  
  
<Switch>
<Route path='/RecipeGrid'><RecipeGrid  recipes={recipes} /></Route>
      <Route path='/'><Home /></Route>
    
      </Switch>
      <Footer/>
    </div>
  )
}

export default App