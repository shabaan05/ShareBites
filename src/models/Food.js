import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true },            
  quantity: { type: Number, required: true },        
  location: { type: String, required: true },        
  contact: { type: String },                         
  description: { type: String },                     
  isClaimed: { type: Boolean, default: false },      
  timestamp: { type: Date, default: Date.now }       
});

const Food = mongoose.model("Food", foodSchema);

export default Food;
