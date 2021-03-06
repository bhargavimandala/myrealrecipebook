import { Ingredient } from '../shared/ingredients.model';
import { EventEmitter } from '@angular/core';


export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('apple', 5),
    new Ingredient('Tomotoes', 15)
  ];
  getingredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
//for (let ingredient of ingredients) {
  //this.addIngredient(ingredient);
//}
this.ingredients.push(...ingredients);
this.ingredientsChanged.emit(this.ingredients.slice());
  }

}
