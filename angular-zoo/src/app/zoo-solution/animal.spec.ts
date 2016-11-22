import {Lion} from './lion';
import {AnimalContextBase} from './animal-context';
import {Panda} from './panda';
import {Animal} from './animal';
import {FoodStorageBase} from './foodStorage';
import {Food} from '../zoo/food';

export class AnimalImpl extends Animal {
}

export class AnimalContextSpy implements AnimalContextBase {
  public onGetAnimals: () => Animal[];
  public onGetFoodStorage: () => FoodStorageBase;
  public addLion(name: string): Lion { return null; }
  public addPanda(name: string): Panda { return null; }
  public animals() : Animal[] { return this.onGetAnimals(); }
  public storage() : FoodStorageBase { return this.onGetFoodStorage(); }
}

export class FoodStorageFake implements FoodStorageBase {
  constructor(public availableFood: Food[]) { }
  public findByName(name : string) : Food { return this.availableFood.filter(f => f.name === name)[0]; }
  public getAll(): Food[] { return this.availableFood; }
  public orderFood(name: string): void { return null; }
}

describe('Animal', function() {

  let sut: AnimalImpl;
  let contextSpy: AnimalContextSpy;
  let foodStorageFake: FoodStorageFake;

  beforeEach(() => {
    foodStorageFake = new FoodStorageFake([ ]);
    contextSpy = new AnimalContextSpy();
    contextSpy.onGetFoodStorage = () => foodStorageFake;
    sut = new AnimalImpl(contextSpy);
  });

  afterEach(() => { // clean up resources
    contextSpy = void 0;
    foodStorageFake = void 0;
    sut = void 0;
  });

  it('should be alive when newly created.', function() {
    expect(sut.isDead).toBeFalsy();
  });

  it('should have an empty name.', function() {
    expect(sut.name).toBe('');
  });

  it('should eat preferred food.', function() {
    setupMeetFood();
    expect(sut.feedAnimal()).toBeTruthy();
  });

  it('should have eaten available food.', function() {
    setupMeetFood();
    sut.feedAnimal();
    expect(foodStorageFake.availableFood[0].amount).toBe(0);
  });

  function setupMeetFood(): Food {
    let food: Food = { name: 'Meet', amount: 5 };
    foodStorageFake.availableFood.push(food);
    sut.compatibleFood.push({ name: 'Meet', amount: 5 });
    return food;
  }
});


