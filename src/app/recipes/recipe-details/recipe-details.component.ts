import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent {
  @Input() recipe!: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppigList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
