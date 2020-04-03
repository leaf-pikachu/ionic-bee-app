import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoutingPage } from './routing.page';

const routes: Routes = [
  {
    path: '',
    component: RoutingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingPageRoutingModule {}
