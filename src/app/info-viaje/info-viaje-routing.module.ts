import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoViajePage } from './info-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: InfoViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfoViajePageRoutingModule {}
