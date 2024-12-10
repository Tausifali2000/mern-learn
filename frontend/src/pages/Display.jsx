import React, { useEffect, useState } from 'react'
import './Products.css';
import Product from './Product.jsx';


const Display = () => {

  const [products , setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/api/products');
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchData();
  }, []); // Dependency array ensures this runs only once
  

 
  return (
    <>
    <div className='display-container'>
    {products.map(product => (
      <Product key={product._id}{...product} />
    ))}
    </div>
    
   </>
  )
}

export default Display