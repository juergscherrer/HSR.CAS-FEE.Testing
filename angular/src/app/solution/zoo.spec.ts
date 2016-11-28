import { Zoo } from "./zoo";
import { Service } from "./service";
import { Animal } from "./animal";
import { Lion } from "./lion";
import { Panda } from "./panda";


describe('A zoo', () => {
	let sut:Zoo;

	beforeEach(() => {
		let animalServiceFake:Service<Animal> = <Service<Animal>> {
			getAll(callback:(animals:Animal[]) => void): void {
				callback([
					new Lion('Leonie', 'The king of lionesses'),
					new Panda('Kung Fu Pandora')
				]);
			}
		};
		sut = new Zoo(animalServiceFake);
	});

	afterEach(() => { // clean up resources -> prevent memory leaks
		sut = void 0;
	});

	it('should contains two animals', function() {
		expect(sut.numberOfAnimals).toBe(2);
	});
	it('should contain a lion and a panda', function() {
		expect(sut.animals[ 0 ] instanceof Lion).toBe(true);
		expect(sut.animals[ 1 ] instanceof Panda).toBe(true);
	});
});
