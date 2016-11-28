import { Component } from '@angular/core';
import { AnimalService } from './solution/animal.service';
import { Animal } from './solution/animal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ AnimalService ]
})
export class AppComponent {
	private animals: Animal[];

	constructor(private animalService: AnimalService) {}

	ngOnInit() {
		this.animalService.getAll((animals: Animal[]) => {
			this.animals = animals;
		});
	}
}
