import { BomberShip } from './../bomber-ship';
import { FighterShip } from './../fighter-ship';
import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.css']
})
export class HangarComponent implements OnInit {

  spaceShips: SpaceShip[] = [];

  constructor() {

  }

  ngOnInit() {
    this.spaceShips.push(new FighterShip(new Pilot("Tori Black", 'assets/pilot_1.jpg')));
    this.spaceShips.push(new BomberShip());
  }

}
