import { User } from './User';
import { Company } from './Company';

interface Mappable {
	location: {
		lat: number;
		lng: number;
	};
}

export class CustomMap {
	private googleMap: google.maps.Map;

	constructor(element: string) {
		this.googleMap = new google.maps.Map(document.getElementById(element), {
			zoom: 1,
			center: {
				lat: 0,
				lng: 0
			}
		});
	}

	addMarker(target: Mappable): void {
		new google.maps.Marker({
			map: this.googleMap,
			position: {
				lat: target.location.lat,
				lng: target.location.lng
			}
		});
	}
}
