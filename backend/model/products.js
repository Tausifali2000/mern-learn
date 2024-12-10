import mongoose, { model, Schema } from "mongoose";

const productsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const products = mongoose.model('products', productsSchema);

export default products;
