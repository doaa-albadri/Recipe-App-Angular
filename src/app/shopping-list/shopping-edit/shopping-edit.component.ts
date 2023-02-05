import { Component } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingerdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  name = '';
  amount!: number;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddIngredient() {
    const ingName = this.name;
    const ingAmount = this.amount;
    const newIngredient = new Ingerdient(ingName, ingAmount);
    this.shoppingListService.onIngredientAdded(newIngredient);
  }
}
