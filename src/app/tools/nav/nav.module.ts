import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NavPageRoutingModule } from './nav-routing.module';

import { NavPage } from './nav.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NavPageRoutingModule
  ],
  declarations: [NavPage]
})
export class NavPageModule {}
