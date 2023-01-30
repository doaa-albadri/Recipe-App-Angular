import { Component } from '@angular/core';
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
}
