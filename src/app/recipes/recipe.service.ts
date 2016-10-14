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

}
