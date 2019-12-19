import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'its a fried chicken',
       'this is a simple test', 'https://img.favpng.com/3/23/4/chinese-cuisine-fried-chicken-thai-cuisine-european-cuisine-food-png-favpng-kuAtwqCfGBYBcbCAdyWzKXi5y.jpg',[
         new Ingredient('meat',1),
         new Ingredient('french fries',26)
       ]),

      new Recipe
      ('its a chinese noodles',
       'this is a simple test2', 'https://img.favpng.com/1/6/2/chinese-noodles-hokkien-mee-chinese-cuisine-vegetarian-cuisine-fried-noodles-png-favpng-V94LQ62wwmgt9qKTU1z8ianCS.jpg',[
        new Ingredient('noodles',1),
        new Ingredient('drink',1)
       ])
    ];
constructor(private shoppingService: ShoppingService) {}

    getRecipes() {
      return this.recipes.slice();
    }
    addingredienttoshoppinglist(ingredient: Ingredient[]) {
this.shoppingService.addIngredients(ingredient);
    }
}
