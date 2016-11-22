import {Food} from './food';
import {AnimalContext} from './animal-context';
import {FoodStorage} from './foodStorage';

/**
 * Created by sgehrig on 14.09.2016.
 */
export abstract class Animal {
  private _isDead : boolean;
  private _compatibleFood : Food[] = new Array<Food>();

  protected _name : string;

  constructor(protected _context: AnimalContext) {
  }

  public get isDead(): boolean {
    return this._isDead;
  }
  public set isDead(value: boolean){
    this._isDead = value;
  }

  public get name(): string {
    return this._name;
  }
  public get compatibleFood(): Food[] {
    return this._compatibleFood;
  }
  public get foodRequired(): boolean {
    return !this.isDead;
  }
  public feedAnimal(): boolean {
    for (var i = 0; i < this.compatibleFood.length; ++i) {
      let foodForAnimal = this.compatibleFood[i];
      let foodFound = FoodStorage.instance.findByName(foodForAnimal.name);

      if (foodFound && foodFound.amount >= foodForAnimal.amount) {
        foodFound.amount -= foodForAnimal.amount;
        return true;
      }
    }
    return false;
  }
}
