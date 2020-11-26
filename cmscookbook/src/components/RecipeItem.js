import React from 'react'
import {Switch, Route} from 'react-router-dom'

const RecipeItem = ({ recipe }) => {
  
  const{name, image, ingredients, method }= recipe.fields
 
  return (

  
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
        
          <img src={image.fields.file.url} alt={name} title= {name} />
        </div>
        <div className='card-back'>
           <div><h1>{name}</h1></div>
        
         <p>{ingredients}</p> 
         <br/>
           <p>{method}</p>
            
            
            
      <Switch>
      <Route path='/Detail'> </Route>
      </Switch>

          
         
          </div>
        </div>
      </div>
    
  )
}

export default RecipeItem;
