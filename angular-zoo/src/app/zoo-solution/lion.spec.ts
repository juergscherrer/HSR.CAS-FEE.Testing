import {Lion} from './lion';
import {AnimalContextBase} from './animal-context';
import {Panda} from './panda';
import {Animal} from './animal';
import {FoodStorageBase} from './foodStorage';
import {Food} from '../zoo/food';

class AnimalContextSpy implements AnimalContextBase {
  public onGetAnimals: () => Animal[];
  public onGetFoodStorage: () => FoodStorageBase;
  public addLion(name: string): Lion { return null; }
  public addPanda(name: string): Panda { return null; }
  public animals() : Animal[] { return this.onGetAnimals(); }
  public storage() : FoodStorageBase { return this.onGetFoodStorage(); }
}

class FoodStorageFake implements FoodStorageBase {
  constructor(private _availableFood: Food[]) { }
  public findByName(name : string) : Food { return null; }
  public getAll(): Food[] { return this._availableFood; }
  public orderFood(name: string): void { return null; }
}

describe('Lion', function() {

  let sut: Lion;
  let contextSpy: AnimalContextSpy;

  beforeEach(() => {
    contextSpy = new AnimalContextSpy();
    sut = new Lion(contextSpy, 'Simba');
  });

  afterEach(() => { // clean up resources
    contextSpy = void 0;
    sut = void 0;
  });

  it('should store its name.', function() {
    expect(sut.name).toEqual('Simba');
  });

  it('should contain any compatible food.', function() {
    expect(sut.compatibleFood.length).toBeTruthy();
  });

  it('should be lined (with another animal) if no compatible food is available.', function() {
    setupStorageWithPanda();
    expect(sut.feedAnimal()).toBeTruthy();
  });

  it('should eat other animal when no compatible food is available.', function() {
    setupStorageWithPanda();
    sut.feedAnimal();
    expect(contextSpy.onGetAnimals()[0].isDead).toBeTruthy();
  });


  function setupStorageWithPanda() : void {
    let foodStorageFake: FoodStorageBase = new FoodStorageFake([ ]);
    let animals: Animal[] = [ new Panda(contextSpy, 'Sample') ];
    contextSpy.onGetFoodStorage = () => foodStorageFake;
    contextSpy.onGetAnimals = () => animals;
  }
});


