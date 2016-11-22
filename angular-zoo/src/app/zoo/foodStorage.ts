import {Food} from './food';
/**
 * Created by sgehrig on 14.09.2016.
 */
export class FoodStorage {
  private static _instance : FoodStorage = null;
  private _food : Food[] = new Array<Food>();

  constructor() {
    this._food.push({name: 'bambus', amount: 3, amountPerDelivery: 3 });
    this._food.push({name: 'grass', amount: 10, amountPerDelivery: 10 });
    this._food.push({name: 'straw', amount: 10, amountPerDelivery: 10 });
    this._food.push({name: 'beef', amount: 10, amountPerDelivery: 10 });
    this._food.push({name: 'chicken', amount: 10, amountPerDelivery: 10 });
  }

  public findByName(name : string) : Food {
    for (let i = 0; i< this._food.length; ++i) {
      if (this._food[i].name === name)
      {
        return this._food[i];
      }
    }
    return void 0;
  }

  public getAll(): Food[] {
    return this._food;
  }

  public orderFood(name: string): void {
    let foundFood = (name) ? this.findByName(name) : void 0;
    if (!foundFood) { throw new Error('Food Not Found'); }
    foundFood.amount += foundFood.amountPerDelivery;
  }

  public static get instance(): FoodStorage {
    if (FoodStorage._instance === null) {
      FoodStorage._instance = new FoodStorage();
    }
    return FoodStorage._instance;
  }
}
