import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpaceRoutingModule } from './space-routing.module';
import { HangarComponent } from './hangar/hangar.component';
import { SpaceShipComponent } from './space-ship/space-ship.component';
import { PilotComponent } from './pilot/pilot.component';
import { PilotRoomComponent } from './pilot-room/pilot-room.component';
import { PlanetDetectorComponent } from './planet-detector/planet-detector.component';

import { EngineersRoomComponent } from './engineers-room/engineers-room.component';
import { DecoderWavesComponent } from './decoder-waves/decoder-waves.component'
import { SharedModule } from '../shared/shared.module';
import { DestructionRoomComponent } from './destruction-room/destruction-room.component';

@NgModule({
  declarations: [HangarComponent, SpaceShipComponent, PilotComponent, PilotRoomComponent, PlanetDetectorComponent, EngineersRoomComponent, DecoderWavesComponent, DestructionRoomComponent],
  imports: [
    CommonModule,
    SpaceRoutingModule,
    SharedModule
  ],
  exports: [
    HangarComponent
  ]
})
export class SpaceModule { }
