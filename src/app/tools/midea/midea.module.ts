import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MideaPageRoutingModule } from './midea-routing.module';

import { MideaPage } from './midea.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MideaPageRoutingModule
  ],
  declarations: [MideaPage]
})
export class MideaPageModule {}
