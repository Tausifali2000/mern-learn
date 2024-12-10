import React from 'react'
import './Display.css';

const Product = ({name, price}) => {
  return (
    <div className='display-container'>
      <h1>{name}</h1>
      <p>{price}</p>
    </div>
  )
}

export default Product