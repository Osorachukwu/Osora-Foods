import React from 'react'
import Food from './Food'

const Menu = () => {
  const foodData = [
    {
      name: "Ofe Onugbu",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "public/foods/Ofe-Onugbu-2.jpg",
      soldOut: false,
    },
    {
      name: "Abacha",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "public/foods/abacha-2.jfif",
      soldOut: false,
    },
    {
      name: "Ofe Egusi",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "public/foods/Egusi-soup.jpg",
      soldOut: false,
    },
    {
      name: "Ofe Okro",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "public/foods/okrosoup-1.webp",
      soldOut: false,
    },
    {
      name: "Fio-Fio and Yam",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "public/foods/fio-fio-food.jpg",
      soldOut: true ,
    },
    {
      name: "Ukwu",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "public/foods/ukwa-na-miri.jfif",
      soldOut: false,
    },
  ];

  let foods = foodData; 
  let numFood = foods.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {numFood > 0 ? (
        <ul className='pizzas'>
          {foodData.map((food)=> ( 
            <Food foodObj={food} key={food.name}/>

          ))}
        </ul> 
      ): <p>We dont have food again Thunder fire you</p> }

    </main>
  )
}

export default Menu






