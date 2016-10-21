import { Injectable } from '@angular/core';
import { Recipe } from './recipe';
import { Ingredient } from './../shared';
import { Headers, Http } from '@angular/http';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://lorempixel.com/100/100/food/1', [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]),
    new Recipe('Summer Salad', 'Okay Tasty', 'http://lorempixel.com/100/100/food/2', [])
  ];
  constructor(private http: Http) { }

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

  storeData() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.post('https://recipebook-27a56.firebaseio.com/recipes.json', body, { headers: headers })
  }

}
