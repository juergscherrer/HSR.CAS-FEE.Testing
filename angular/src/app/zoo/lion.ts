import { Animal } from './animal';


export class Lion extends Animal {
	constructor(name:string, public description:string) {
		super(name);
	}
}
