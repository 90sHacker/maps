import { faker } from "@faker-js/faker"
import { Mappable } from './Map'

export class User implements Mappable {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent() : string {
    return `
      <h1>User Name: ${this.name}</h1>
      <h2>Find me at (lat: ${this.location.lat}, lng: ${this.location.lng})</h2>
    `
  }
}