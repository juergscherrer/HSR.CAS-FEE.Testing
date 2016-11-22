import {AnimalContext} from './animal-context';

describe('Animal Context', function() {

  let sut: AnimalContext;

  beforeEach(() => {
    sut = new AnimalContext();
  });

  afterEach(() => { // clean up resources
    sut = void 0;
  });

  it('should create a lion when requested.', function() {
    expect(sut.addLion('lion')).toBeTruthy();
  });

  it('should create a panda when requested.', function() {
    expect(sut.addPanda('panda')).toBeTruthy();
  });

  it('should store created animals.', function() {
    sut.addPanda('panda');
    sut.addLion('lion');
    expect(sut.animals().length).toBe(2);
  });
});


