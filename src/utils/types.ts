export interface IRecipe {
  id: number;
  name: string;
  readyInMinutes: number;
  servings: number;
  image: string;
  instructions: string;
  diet: IDiet;
  ingredients: Array<IIngredient>;
}

export interface IDiet {
  vegetarian: boolean;
  vegan: boolean;
  glutenFree: boolean;
  dairyFree: boolean;
}

export interface IIngredient {
  id: number;
  name: string;
  measures: IMeasures;
}

export interface IMeasures {
  us: IMeasurement;
  metric: IMeasurement;
}

export interface IMeasurement {
  amount: number;
  unit: string;
}