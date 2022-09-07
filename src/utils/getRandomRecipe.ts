import { IDiet, IIngredient, IMeasurement, IMeasures, IRecipe } from "./types";
import { api } from "./axios";

export default async function getRandomRecipe() {
  const recipe = await api.get("/random");
  const recipeData = recipe.data.recipes[0];

  const dietObject: IDiet = {
    vegetarian: recipeData.vegetarian,
    vegan: recipeData.vegan,
    glutenFree: recipeData.glutenFree,
    dairyFree: recipeData.dairyFree
  };

  const ingredientsArray: Array<Object> = recipeData.extendedIngredients;
  let ingredients: Array<IIngredient> = new Array();

  ingredientsArray.forEach(item  => {
    let ingredient: IIngredient = {
      id: 0,
      name: "ingredient",
      measures: {us: {amount: 0, unit: "pounds"}, metric: {amount: 0, unit: "grams"}}
    };

    for(let [key, value] of Object.entries(item)) {
      if(key === "id") {
        ingredient.id = value;
      }
      if(key === "name") {
        ingredient.name = value;
      }
      if (key === "measures") {
        let usMeasures: IMeasurement = {
          amount: value.us.amount, 
          unit: value.us.unitLong
        }

        let metricMeasures: IMeasurement = {
          amount: value.metric.amount, 
          unit: value.metric.unitLong
        }

        ingredient.measures = {us: usMeasures, metric: metricMeasures}
      }
    }

    ingredients.push(ingredient);
  });
        
  const recipeMap: IRecipe = {
    id: recipeData.id,
    name: recipeData.title,
    readyInMinutes: recipeData.readyInMinutes,
    servings: recipeData.servings,
    image: recipeData.image,
    instructions: recipeData.instructions,
    diet: dietObject,
    ingredients: ingredients
  };

  return recipeMap;
}