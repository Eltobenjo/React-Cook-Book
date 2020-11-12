import React from 'react'
import RecipeItem from './RecipeItem'


const RecipeGrid = ({recipes}) => {
  console.log(recipes)
  
  return (
    

<section className='cards'>
      {recipes.map((recipe, ) => 
       <RecipeItem key={recipe.sys.id} recipe= {recipe}>post</RecipeItem>
      )}
</section>
  )
}

export default RecipeGrid

       