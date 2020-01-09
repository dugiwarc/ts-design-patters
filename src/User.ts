import faker from 'faker';

export class User {
	name: string;
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
}
