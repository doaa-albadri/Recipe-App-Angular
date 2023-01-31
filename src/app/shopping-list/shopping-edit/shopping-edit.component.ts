import { Component, EventEmitter, Output } from '@angular/core';
import { Ingerdient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  name = '';
  amount!: number;

  @Output() ingredientCreated = new EventEmitter<Ingerdient>();

  onAddIngredient() {
    const ingName = this.name;
    const ingAmount = this.amount;
    const newIngredient = new Ingerdient(ingName, ingAmount);
    this.ingredientCreated.emit(newIngredient);
  }
}
