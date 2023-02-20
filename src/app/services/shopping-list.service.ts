import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Ingerdient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingerdientsChanged = new Subject<Ingerdient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingerdient[] = [
    new Ingerdient('Apples', 5),
    new Ingerdient('Tomatoes', 10),
  ];

  // we use slice here so we create a copy of the original data
  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  constructor() {}

  onIngredientAdded(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
    // we create this event and emit it so we can have a new updated copy when adding a new item
    this.ingerdientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingerdient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient)
    // }
    this.ingredients.push(...ingredients);
    this.ingerdientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingerdient) {
    this.ingredients[index] = newIngredient;
    this.ingerdientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingerdientsChanged.next(this.ingredients.slice());
  }
}
