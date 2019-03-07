import { Injectable } from '@angular/core';
import { Observable, interval, BehaviorSubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { OrderFormValue } from './order-form-value';

import { SpaceShipType } from './space-ship-type.enum';
import { FighterShip } from './fighter-ship';
import { BomberShip } from './bomber-ship';
import { SpaceShip } from './space-ship';
import { DestructionFormValue } from './destruction-form-value';

@Injectable({
  providedIn: 'root'
})
export class SpaceShipService {
  hangarShips = new BehaviorSubject<SpaceShip[]>([]);
  static shipProductionTime = 2000;

  constructor() {}

  removeShip(formValues: DestructionFormValue) {
    const ships = [...this.hangarShips.getValue()];
    ships.splice(formValues.shipIndex, 1);
    this.hangarShips.next(ships);
  }

  public produceShips(formValues: OrderFormValue): Observable<SpaceShip> {
    const shipClass = formValues.shipType === SpaceShipType.Fighter ? FighterShip : BomberShip;
    return interval(SpaceShipService.shipProductionTime).pipe(
      map(() => new shipClass()),
      take(formValues.shipCount),
      tap((spaceShip) => this.hangarShips.next([...this.hangarShips.getValue(), spaceShip]))
    );
  }
}
