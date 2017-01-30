import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes';
import { Observable } from 'rxjs/Rx.js'
@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  tOrF: boolean = true;
  constructor() {
  }

  ngOnInit() {
  }


}
