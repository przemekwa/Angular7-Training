import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SpaceShipType } from '../space-ship-type.enum';
import { OrderFormValue } from '../order-form-value';
import { SpaceShip } from '../space-ship';
import { SpaceShipService } from '../space-ship.service';
import { map } from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.css']
})
export class EngineersRoomComponent implements OnInit {



  spaceShipTypes: ShipType [] = [
    {label: 'Myśliwiec', value: SpaceShipType.Fighter},
    {label: 'Bombowiec', value: SpaceShipType.Bomber}
  ];
  isProducing: boolean;

  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  constructor(private spaceShipService: SpaceShipService) { }

  orderSpaceShips(formValues: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValues)
        .subscribe({
          complete: () => this.isProducing = false
        });
  }

  ngOnInit() {
  }

}
