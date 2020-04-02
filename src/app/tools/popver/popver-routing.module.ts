import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PopverPage } from './popver.page';

const routes: Routes = [
  {
    path: '',
    component: PopverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PopverPageRoutingModule {}
