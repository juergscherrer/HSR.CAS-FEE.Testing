import {Lion} from './lion';
import {Panda} from './panda';
import {Animal} from './animal';
import {FoodStorage} from './foodStorage';

/**
 * Created by sgehrig on 14.09.2016.
 */
export class AnimalContext {
  private _animals: Animal[] = new Array<Animal>();

  constructor() {}

  public addLion(name: string): Lion {
    let lion = new Lion(this, name);
    this._animals.push(lion);
    return lion;
  }

  public addPanda(name: string): Panda {
    let panda = new Panda(this, name);
    this._animals.push(panda);
    return panda;
  }

  public animals() : Animal[] {
    return this._animals;
  }
}
