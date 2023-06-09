// definition for classes to be of type Mappable
// and hence be eligible for the addMarker function
export interface Mappable {
  location: {
    lat: number,
    lng: number
  };
  markerContent(): string;
}

export class Map {
  private googleMap: google.maps.Map;

  constructor(map: HTMLElement) {
    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    })
  };

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      }
    });
    
    const infoWindow = new google.maps.InfoWindow({
      content: mappable.markerContent()
    });

    marker.addListener('click', () => {
      infoWindow.open(this.googleMap, marker);
    });
  }
}