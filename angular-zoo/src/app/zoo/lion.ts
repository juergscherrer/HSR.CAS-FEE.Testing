import {Animal} from './animal';
import {AnimalContext} from './animal-context';
import {Panda} from './panda';

/**
 * Created by sgehrig on 14.09.2016.
 */
export class Lion extends Animal {
  constructor(context: AnimalContext, name: string) {
    super(context);
    this._name = name;
    this.compatibleFood.push(
        {name: 'beef', amount: 5},
        {name: 'chicken', amount: 10} );
  }

  public feedAnimal(): boolean {
    if (!super.feedAnimal()) {
      let panda = this._context.animals().filter(function (x) {
        return (x instanceof Panda && !x.isDead);
      });
      if (panda[0]) {
        panda[0].isDead = true;
        return true;
      }
      return false;
    }
    return true;
  }
}
