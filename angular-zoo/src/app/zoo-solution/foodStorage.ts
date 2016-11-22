import {Food} from './food';

export interface FoodStorageBase {
  findByName(name : string) : Food;
  getAll(): Food[];
  orderFood(name: string): void;
}

/**
 * Created by sgehrig on 14.09.2016.
 */
export class FoodStorage implements FoodStorageBase {
  private _food : Food[] = new Array<Food>();

  constructor() {
    // fill initial food into storage
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
}
