import React from 'react'
import {Switch, Route, NavLink} from 'react-router-dom'

const RecipeItem = ({ recipe }) => {
  
  const{mealType,name, image, description,method }= recipe.fields
 
  return (

  
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={image.fields.file.url} alt={name} title= {name} />
        </div>
        <div className='card-back'>
          <h1>{mealType}</h1>
          <h2>{name}</h2>
          <ul>
            <li> 
            {description}
            
            
            </li>
          </ul>
      <NavLink to ={name}>{name}</NavLink>  
          

          
         
          </div>
        </div>
      </div>
    
  )
}

export default RecipeItem;
