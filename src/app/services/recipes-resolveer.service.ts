import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';

import { Recipe } from '../recipes/recipes.model';
import { DataStroageService } from './data-stroage.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolveerService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStroageService,
    private recipeService: RecipeService
  ) {}

  // we run this resolver (get recipes req) everytime these particular routes are loaded
  // we add the resolver to our routes in the routes module
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();

    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
