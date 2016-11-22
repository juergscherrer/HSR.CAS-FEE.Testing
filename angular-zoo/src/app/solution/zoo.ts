import { Animal } from "./animal";
import { Service } from "./service";


export class Zoo {
	public animals: Animal[] = [];

	constructor(private animalService: Service<Animal>) {
		this.animalService.getAll((animals) => {
			this.animals = animals;
		});
	}

	get numberOfAnimals() {
		return this.animals.length;
	}
}
