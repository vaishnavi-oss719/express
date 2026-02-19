import mongoose from "mongoose";


const reciSchema= mongoose.Schema({
    title: String ,
    ingredients: String,
    instructions: String,
    cookingTime: Number
})



const Recipe = mongoose.model("Recipe", reciSchema);
export default Recipe;