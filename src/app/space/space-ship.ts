import { Pilot } from './pilot';

export abstract class SpaceShip {
  constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
  pilot: Pilot;
  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields = true;
  activeWeapons = true;
}
