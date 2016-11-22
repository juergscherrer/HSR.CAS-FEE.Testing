import {Panda} from './panda';
import {AnimalContextSpy} from './animal.spec';

describe('Panda', function() {

  let sut: Panda;

  beforeEach(() => {
    sut = new Panda(new AnimalContextSpy(), 'Panda');
  });

  afterEach(() => { // clean up resources
    sut = void 0;
  });

  it('should store its name.', function() {
    expect(sut.name).toEqual('Panda');
  });

});


