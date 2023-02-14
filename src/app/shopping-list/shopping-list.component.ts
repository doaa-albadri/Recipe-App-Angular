import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ShoppingListService } from '../services/shopping-list.service';
import { Ingerdient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingerdient[];
  private igChangeSub!: Subscription;

  // ingredients: Ingerdient[] = [
  //   new Ingerdient('Apples', 5),
  //   new Ingerdient('Tomatoes', 10),
  // ];

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    // here we're subscribing to this event and updating to the new sliced/updated array
    this.igChangeSub = this.shoppingListService.ingerdientsChanged.subscribe(
      (ingredients: Ingerdient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }

  // newTest = ''; //passing this from here up to the parent (app)

  // @Output() testCreated = new EventEmitter<string>(); // creating an output event

  // @Input('testAgain') test!: string;

  // onAddTest() {
  //   this.testCreated.emit(this.newTest);
  // }

  // onIngredientAdded(ingredient: Ingerdient) {
  //   this.ingredients.push(ingredient);
  // }

  onIngredientAdded(ingredient: Ingerdient) {
    this.shoppingListService.onIngredientAdded(ingredient);
  }
}
