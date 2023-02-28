import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { Ingerdient } from 'src/app/shared/ingredient.model';
import { ItemsService } from 'src/app/services/items.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false }) slForm!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedItemIndex!: number;
  editedItem!: Ingerdient;
  // TEST HTTP REQS
  loadedItems: Ingerdient[] = [];
  isFetching = false;

  constructor(
    private shoppingListService: ShoppingListService,
    private http: HttpClient,
    private itemsService: ItemsService
  ) {}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
    // TEST HTTP REQS
    // this.isFetching = true;
    // this.itemsService.fetchItems().subscribe((items) => {
    //   this.isFetching = false;
    //   this.loadedItems = items;
    //   console.log('fetching items on init', items);
    // });
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingerdient(value.name, value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient
      );
    } else {
      this.shoppingListService.onIngredientAdded(newIngredient);

      // TEST HTTP REQS
      // this.itemsService.createAndStore(value.name, value.amount);
    }
    this.editMode = false;
    form.reset();
  }

  onClear() {
    // this.slForm.reset();
    this.editMode = false;
    // TEST HTTP REQS
    // testing the delete request
    // this.itemsService.clearItems().subscribe(() => {
    //   this.loadedItems = [];
    // });
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.editMode = false;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // TEST HTTP REQS

  onFetchItems() {
    this.itemsService.fetchItems();
  }
}
