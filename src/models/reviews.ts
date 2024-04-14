import mongoose from "mongoose";

const reviewSchema= new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
  title: {type: String, required: true},
  description: {type: String, required: true},
  rating: {type: Number, required: true, default: 0, min: 0, max: 5},
}, {
  timestamps: true,
});

export default reviewSchema;
