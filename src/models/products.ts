import mongoose from "mongoose";
import reviewSchema from "./reviews.ts";
import {thirtyDaysFromNow} from "./utils.ts";

const productSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  title: {type: String, required: true},
  description: {type: String, required: true},
  image: {type: String, required: true},
  price: {type: Number, required: true},
  brand: {type: String, required: true},
  category: {type: String, required: true},
  rating: {type: Number, required: true, default: 0, min: 0, max: 5},
  reviews: [reviewSchema],
  stock: {type: Number, required: true, default: 0},
  offer: {type: Number, required: true, default: 0, min: 0, max: 100},
  offerValidTill: {type: Date, required: true, default: thirtyDaysFromNow},
}, {
  timestamps: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;
