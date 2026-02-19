import Recipe from "../Models/Recipe.schema.js";


export const createRecipe = async (req,res)=>{
    try{
  const newRecipe = new Recipe(req.body);
  await newRecipe.save();
  res.status(200).json({message :"Recipe added sucessfully",data: newRecipe});
    }
    catch(error){
        console.log(error)
    }
}

export const getRecipeDetails = async(req,res)=>{
    try{
        const recipe =await Recipe.find()
        res.status(200).json({data:recipe})
    }
    catch(error){
        console.log(error)
    }
}



export const getRecipeById = async(req,res)=>{
    try{
  const reciId = req.params.id;
  const recipe=await Recipe.findById(reciId);
  if(!recipe){
    return res.status(404).json({message: "recipe not found"})

  }
  res.status(200).json({message:"recipe found",data :recipe})
    }
    catch(error){
        console.log(error);
    }
}


// export const updateRecipeById = async(req,res) => {
//     try{
//       const id=req.params.id;
      
//       const {ingredient,instructions,cookingTime}=req.body;
//       const result=await Recipe.findByIdAndUpdate({id},{ingredient,instructions,cookingTime})
//       console.log(result);
//       if(result.matchedCount===0){
//         return res.status(404).json({mesaage:"Recipe not Found"})
//       }
//       const updateRec = await Recipe.find({id});
//       res.status(200).json({data:updateRec})
//     }
//     catch(error){
// console.log(error)
//     };

// }

export const updateRecipeById = async (req, res) => {
  try {
    const id = req.params.id;

    const {ingredient, instructions, cookingTime } = req.body;

    const updatedRecipe = await Recipe.findByIdAndUpdate(
      id,  
      { ingredient, instructions, cookingTime },
      { new: true }  
    );

    if (!updatedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }


    res.status(200).json({ data: updatedRecipe });

  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Server error" });
  }
};

export const deleteRecipeById = async (req, res) => {
  try {
    const id = req.params.id;   // ✅ get id

    const deletedRecipe = await Recipe.findByIdAndDelete(id); // ✅ just id

    if (!deletedRecipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.status(200).json({
      message: "Recipe deleted successfully",
      data: deletedRecipe
    });

  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "Server error" });
  }
};


