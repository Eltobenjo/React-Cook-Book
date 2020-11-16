import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import RecipeGrid from './components/RecipeGrid'
import Info from './components/Info'
import './App.css'
import {Switch, Route} from 'react-router-dom'



  var contentful = require('contentful');


function App() {
  const [recipes, setRecipes] = useState([]);
 
  useEffect(() => {
var client = contentful.createClient({
  space: '7f7xzl6mcsv0',
  accessToken: 'l0CFKRve4qqQu6suVO7F1cjqdAijVhBiK1eyXjsYyVY'
})
client.getEntries()
.then((entries) => {
  setRecipes(entries.items);
 
  console.log(entries)


});
}, []);
  
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