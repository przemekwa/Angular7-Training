import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlackHoleComponent } from './black-hole/black-hole.component';

const routes: Routes = [
  {path: '', redirectTo: 'space', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
