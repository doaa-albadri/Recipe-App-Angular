import { Injectable } from '@angular/core';

import { Recipe } from '../recipes/recipes.model';
import { Ingerdient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'This is a test.',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingerdient('Meat', 1), new Ingerdient('Tomato', 2)]
    ),
    new Recipe(
      'Test Recipe 2',
      'This is a test 2.',
      'https://assets.bonappetit.com/photos/61b775620fb3fcc4cbf036c1/master/pass/20211208%20Spaghetti%20Squash%20with%20Tomato%20Sauce%20and%20Mozarella%20LEDE.jpg',
      [new Ingerdient('Cucumber', 6), new Ingerdient('Bread', 3)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingerdient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
