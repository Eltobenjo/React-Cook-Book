import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Header from './components/ui/Header'
import RecipeGrid from './components/RecipeGrid'

import './App.css'




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
     
      <RecipeGrid  recipes={recipes} />

      <Footer/>
    </div>
  )
}

export default App