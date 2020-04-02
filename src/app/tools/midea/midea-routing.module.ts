import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MideaPage } from './midea.page';

const routes: Routes = [
  {
    path: '',
    component: MideaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MideaPageRoutingModule {}
