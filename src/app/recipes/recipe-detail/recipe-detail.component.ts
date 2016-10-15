import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipes';
import { ShoppingListService } from './../../shopping-list/shopping-list.service';
import { Router } from '@angular/router'
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  private recipeIndex: number = 1;

  constructor(private sls: ShoppingListService, private router:Router) { }

  ngOnInit() {
  }

  onAddToShoppingList() {
    console.log(this.selectedRecipe.ingredients);
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  onEdit(){
      this.router.navigate(['/recipes', this.recipeIndex, 'edit'])
  }

  onDelete(){
       this.router.navigate(['/recipes'])
  }


}
