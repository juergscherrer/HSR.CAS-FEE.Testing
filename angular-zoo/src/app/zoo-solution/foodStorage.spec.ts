import {FoodStorage} from './foodStorage';

describe('Food Storage', function() {

  let sut: FoodStorage;

  beforeEach(() => {
    sut = new FoodStorage();
  });

  afterEach(() => { // clean up resources
    sut = void 0;
  });

  it('should contain an initial stock of food.', function() {
    expect(sut.getAll().length).toBeTruthy();
  });

  it('should contain chicken.', function() {
    expect(sut.findByName('chicken')).toBeTruthy();
  });

  it('should enlarge the amount of food when ordered.', function() {
    let grassFood = sut.findByName('grass');
    let currentAmount = grassFood.amount;
    sut.orderFood(grassFood.name);
    expect(grassFood.amount).toBe(currentAmount + grassFood.amountPerDelivery);
  });

  it('should throw an error no food is ordered.', function() {
    expect(function() {
      sut.orderFood(null);
    }).toThrow(new Error('Food Not Found'));
  });

  it('should throw an error if uncontained food is ordered.', function() {
    expect(function() {
      sut.orderFood('milk');
    }).toThrow(new Error('Food Not Found'));
  });
});


