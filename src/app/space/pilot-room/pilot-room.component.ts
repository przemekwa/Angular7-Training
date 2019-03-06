import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.css']
})
export class PilotRoomComponent implements OnInit {

  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;
  @Output() selected = new EventEmitter<Pilot>();


  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Tori Black', '/assets/pilot_1.jpg'));
    this.pilots.push(new Pilot('Pilot UFO'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
    this.selected.emit(pilot);
  }

  pilotLeave() {
    const index = this.pilots.indexOf(this.selectedPilot);
    this.pilots.splice(index, 1);
    this.select(null);
  }

  pilotReturn(pilot: Pilot) {

    this.pilots.push(pilot);
  }

}
