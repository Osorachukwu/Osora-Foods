import React from 'react'
import Order from './Order';

const Footer = () => {
  const hour = new Date().getHours();
  const openHours = 9;
  const closeHours = 17;
  const isOpen = hour >= openHours && hour <= closeHours;
  console.log(isOpen);
  

  return (
  <footer className='footer'>
    {isOpen ? (
      <Order closeHours={closeHours}/>
     
    ) : <p>
          We're Happy to welcome you between {openHours}:00 and {closeHours}:00
        </p> 
    }
    
  </footer>
  )
}

export default Footer

