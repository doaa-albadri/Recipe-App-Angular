import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ingerdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  ingredients: Ingerdient[] = [
    new Ingerdient('Apples', 5),
    new Ingerdient('Tomatoes', 10),
  ];

  // newTest = ''; //passing this from here up to the parent (app)

  // @Output() testCreated = new EventEmitter<string>(); // creating an output event

  // @Input('testAgain') test!: string;

  // onAddTest() {
  //   this.testCreated.emit(this.newTest);
  // }

  onIngredientAdded(ingredient: Ingerdient) {
    this.ingredients.push(ingredient);
    console.log(this.ingredients);
  }
}
