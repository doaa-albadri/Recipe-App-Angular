import { EventEmitter, Injectable } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  ingerdientsChanged = new EventEmitter<Ingerdient[]>();

  private ingredients: Ingerdient[] = [
    new Ingerdient('Apples', 5),
    new Ingerdient('Tomatoes', 10),
  ];

  // we use slice here so we create a copy of the original data
  getIngredients() {
    return this.ingredients.slice();
  }

  constructor() {}

  onIngredientAdded(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
    // we create this event and emit it so we can have a new updated copy when adding a new item
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingerdient[]) {
    // for (let ingredient of ingredients) {
    //   this.onIngredientAdded(ingredient)
    // }
    this.ingredients.push(...ingredients);
    this.ingerdientsChanged.emit(this.ingredients.slice());
  }
}
