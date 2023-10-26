import React from 'react';

function Food({foodObj}) {

  return (
    <li className={`pizza ${foodObj.soldOut ? 'sold-out' : ''}`}> 
        <img src={foodObj.photoName} alt={foodObj.alt} />
        <div>
         <h3>{foodObj.name}</h3>
         <p>{foodObj.ingredients}</p> 

         
         <span>{foodObj.soldOut ? <p>SOLD OUT</p> : foodObj.price}</span>
        </div>
    </li>
  )
}


export default Food


