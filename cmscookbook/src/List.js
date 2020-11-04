import React, { useState, useEffect } from "react";
import "./List.css";
var contentful = require('contentful');
function List() {
 
  return (
    <div className="List">
      {recipes.map((recipe) => (
        <li key={recipe.sys.id}>{recipe.fields.title}</li>
      ))}
    </div>
  );
}

export default List;