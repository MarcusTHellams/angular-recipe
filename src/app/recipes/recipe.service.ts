import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './../shared';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://lorempixel.com/100/100/food/1', [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]),
    new Recipe('Summer Salad', 'Okay Tasty', 'http://lorempixel.com/100/100/food/2', [])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

}
