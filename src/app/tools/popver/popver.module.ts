import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PopverPageRoutingModule } from './popver-routing.module';

import { PopverPage } from './popver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PopverPageRoutingModule
  ],
  declarations: [PopverPage]
})
export class PopverPageModule {}
