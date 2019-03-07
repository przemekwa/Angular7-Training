import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HangarComponent } from './hangar/hangar.component';
import { BlackHoleComponent } from '../black-hole/black-hole.component';

const routes: Routes = [
  {path: 'space', component: HangarComponent},
  {path: '**', component: BlackHoleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceRoutingModule { }
