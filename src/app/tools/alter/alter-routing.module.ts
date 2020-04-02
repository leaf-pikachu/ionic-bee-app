import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterPage } from './alter.page';

const routes: Routes = [
  {
    path: '',
    component: AlterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterPageRoutingModule {}
