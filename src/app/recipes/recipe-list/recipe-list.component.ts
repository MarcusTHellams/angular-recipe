import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very Tasty', 'http://lorempixel.com/100/100/food/1', []),
    new Recipe('Summer Salad', 'Okay Tasty', 'http://lorempixel.com/100/100/food/2', [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  };

}
