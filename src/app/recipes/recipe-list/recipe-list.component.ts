import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes';
import { RecipeService } from './../recipe.service';
import { BehaviorSubject } from "rxjs/Rx";

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  random = 0;
  private countSource = new BehaviorSubject<number>(this.random);
  constructor(private recipeService: RecipeService) { 
    
  }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe((recipes: Recipe[]) => this.recipes = recipes);
  }

  // watchTest = Observable.from(this.random);

  increaseRandom() {
    this.random++;
    console.log(this.random);
  }

}
