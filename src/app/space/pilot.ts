export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot {
  static defaultImageUrl = '/assets/unknown-pilot.png';
  id: number;
  firstName: string;
lastName: string;
imageUrl: string;
test: string = "działa";

constructor(attrs: Partial<PilotAttrs> = {}) {
  this.id = attrs.id;
  this.firstName = attrs.firstName;
  this.lastName = attrs.lastName;
  this.imageUrl = attrs.imageUrl || Pilot.defaultImageUrl;
}

// constructor(fullName: string, imageUrl = Pilot.defaultImageUrl) {
//   this.fullName = fullName;
//   this.imageUrl = imageUrl;
// }

get fullName():string {
 return `${this.firstName} ${this.lastName}`;
}

set fullName(value: string) {
  const values = value.split(' ');
  this.firstName = values[0];
  this.lastName = values[1];
}
}
