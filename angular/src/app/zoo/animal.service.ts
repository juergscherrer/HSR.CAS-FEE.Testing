import { Animal } from "./animal";
import { Lion } from "./lion";
import { Panda } from "./panda";


export class AnimalService {
	private static instance: AnimalService = null;

	getAll(callback:(animals:Animal[]) => void):void {
		// call server - will durate 200ms
		setTimeout(() => {
			callback([
				new Lion('Leon', 'The king of animals'),
				new Panda('Kung Fu Panda')
			]);
		}, 200);
	}

	public static get instance():AnimalService {
		if (AnimalService.instance === null) {
			AnimalService.instance = new AnimalService();
		}
		return AnimalService.instance;
	}
}
