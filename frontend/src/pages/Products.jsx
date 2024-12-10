import React, { useState } from 'react'
import './Products.css';

const Products = () => {

  const [name, setName] = useState('');
  const [price , setPrice] = useState('');

  async function createProduct(ev) {
    ev.preventDefault();
    try {
      const response = await fetch('http://localhost:4000/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });

      if (response.ok) {
        alert('Product created successfully!');
        setName('');
        setPrice('');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message}`);
      }
    } catch (error) {
      console.error('Error creating product:', error.message);
    }
  }
  return (
    <form onSubmit={createProduct}>
      <input 
          type="text" 
          placeholder='Enter Product name' 
          value={name}
          onChange={ev => setName(ev.target.value)}/>

      
      <input 
          type="number" 
          placeholder='Enter Product Price' 
          value={price}
          onChange={ev => setPrice(ev.target.value)}/>
      
      

      <button type='onSubmit'>Create Product</button>
    
    </form>
  )
}

export default Products