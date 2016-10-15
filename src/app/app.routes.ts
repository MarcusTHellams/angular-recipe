import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

import { RECIPE_ROUTES } from './recipes/recipes.routes';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'recipes' },
    { path: 'recipes', component: RecipesComponent, children: RECIPE_ROUTES },
    { path: 'shopping-list', component: ShoppingListComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes/*, { useHash: true }*/)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [RecipesComponent, ShoppingListComponent]; /*Not needed when using Angular-cli*/