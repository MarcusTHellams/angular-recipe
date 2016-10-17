import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe';
import { Subscription } from 'rxjs/Rx';
import { FormArray, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'rb-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styles: []
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  private recipeForm: FormGroup;
  private subscription: Subscription;
  private recipe: Recipe;
  private recipeIndex: number;
  private isNew = true;
  constructor(private route: ActivatedRoute,
    private recipeService: RecipeService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        if (params.hasOwnProperty('id')) {
          this.recipeIndex = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.recipeIndex);
          this.isNew = false;
        } else {
          this.isNew = true;
          this.recipe = null;
        }
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private initForm(isNew: boolean) {
    let recipeName = '';
    let recipeImageUrl = '';
    let recipeContent = '';
    let recipeIngredients: FormArray = new FormArray([]);

    if (!this.isNew) {
      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        recipeIngredients.push(
          new FormGroup({
            name: new FormControl(this.recipe.ingredients[i].name, [
              Validators.required,
              Validators.pattern('\\d+')
            ]),
            amount: new FormControl(this.recipe.ingredients[i].amount, Validators.required)
          })
        );
      };

      recipeName = this.recipe.name;
      recipeImageUrl = this.recipe.imagePath;
      recipeContent = this.recipe.description;
    }

    this.recipeForm = this.formBuilder.group({
      name: [recipeName, Validators.required],
      imagePath: [recipeImageUrl, Validators.required],
      description: [recipeContent, Validators.required],
      ingredients: recipeIngredients
    });
  }
}
