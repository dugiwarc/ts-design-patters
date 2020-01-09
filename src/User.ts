import faker from 'faker';
import { Mappable } from './CustomMap';

export class User implements Mappable {
	name: string;
	color: string = 'red';
	location: {
		lat: number;
		lng: number;
	};

	constructor() {
		this.name = faker.name.firstName(-1);
		this.location = {
			lat: parseFloat(faker.address.longitude()),
			lng: parseFloat(faker.address.latitude())
		};
	}

	markerContent(): string {
		return `
		<div>
			<h2>
				User Name: ${this.name} 
			</h2>
		</div>
		`;
	}
}
