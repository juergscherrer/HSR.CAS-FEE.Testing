import { Injectable } from "@angular/core";

import { Animal } from "./animal";
import { Lion } from "./lion";
import { Panda } from "./panda";
import { Service } from "./service";


@Injectable()
export class AnimalService implements Service<Animal> {
	getAll(callback: (animals: Animal[]) => void): void {
		// call server - will durate 200ms
		setTimeout(() => {
			callback([
				new Lion('Leon', 'The king of animals'),
				new Panda('Kung Fu Panda')
			]);
		}, 200);
	}
}
