import express from 'express';
import products from './model/products.js';
import mongoose from 'mongoose'
 import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT

app.use(express.json())
const __dirname = path.resolve();
app.use(cors({
  origin: ['https://mern-learn-l2sn.onrender.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));




mongoose.connect(process.env.MONGO_URI);








app.post('/api/products' , async ( req, res) => {
  const {name,price} = req.body;

  if(!name || !price) {
    return res.status(400).json({success:false, message: "Please provide all fields"});
  }

  const newProduct = new products({name,price});

  try{
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
  } catch(error) {
      console.error('Error in create product:', error.message);
      res.status(500).json({success: false, message: 'server error'});
  };
});

app.get('/api/products', async (req, res) => {
  try {
    const response = await products.find({});
    res.status(200).json(response); // Return the array directly
  } catch (error) {
    console.log("Error in fetching products:", error.message);
    res.status(500).json({ success: false, message: "Server Error" });
  }
});

if(process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
}


app.listen(PORT, () => {
  console.log("Server started at :" + PORT);
})