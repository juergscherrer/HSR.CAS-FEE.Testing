import { Animal } from "./animal";
import { AnimalService } from "./animal.service";


export class Zoo {
	public animals: Animal[] = [];

	constructor() {
		AnimalService.instance.getAll((animals) => {
			this.animals = animals;
		});
	}

	get numberOfAnimals() {
		return this.animals.length;
	}
}
