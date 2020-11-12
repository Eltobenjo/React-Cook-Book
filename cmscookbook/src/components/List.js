import React from "react";



function List(props) {
 const {recipes} = props 
  return (
    <div className="List">
    
      {recipes.map((recipe) => (
         <p> {recipe.sys.id}</p>
         
      ))}
    </div>
  );
}

export default List;