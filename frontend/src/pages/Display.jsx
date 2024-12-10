import React, { useEffect, useState } from 'react'
import './Products.css';
import Product from './product';


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
    {products.map(product => (
      <Product key={product._id}{...product} />
    ))}
   </>
  )
}

export default Display