import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const user = new User();
const company = new Company();
const map = document.getElementById('map') as HTMLElement;
const myMap = new Map(map);

myMap.addMarker(user);
myMap.addMarker(company);

console.log(user);
console.log(company);


