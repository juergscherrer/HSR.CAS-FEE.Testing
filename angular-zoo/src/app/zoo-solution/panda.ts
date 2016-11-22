import {Animal} from './animal';
import {AnimalContextBase} from './animal-context';

/**
 * Created by sgehrig on 14.09.2016.
 */
export class Panda extends Animal {
  constructor(context: AnimalContextBase, name: string) {
    super(context);
    this._name = name;
    this.compatibleFood.push({name: 'bambus', amount: 1});
  }
}
