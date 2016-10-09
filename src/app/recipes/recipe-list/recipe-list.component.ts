import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../../recipes';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [];
recipe = new Recipe('Dummy', 'Dummy Description', 'https://unsplash.it/200/?random');
@Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
      this.recipeSelected.emit(this.recipe);
  };

}
