import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { Recipe } from '../recipes/recipes.model';
import { AuthService } from './auth.service';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class DataStroageService {
  constructor(
    private http: HttpClient,
    private recipeService: RecipeService,
    private authServie: AuthService
  ) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    // we add return in the start so we can access the data somewhere else
    // we are posting/putting here so usually we can subscribe here
    this.http
      .put(
        'https://ng-project-c984a-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  // subscribing here cuz we're using this in the header component and we dont need the data there
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://ng-project-c984a-default-rtdb.firebaseio.com/recipes.json'
      )
      .pipe(
        // first map is rxjs operator - second map is regular old js
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        tap((recipes) => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
