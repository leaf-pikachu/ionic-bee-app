import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressIndicatorsPageRoutingModule } from './progress-indicators-routing.module';

import { ProgressIndicatorsPage } from './progress-indicators.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressIndicatorsPageRoutingModule
  ],
  declarations: [ProgressIndicatorsPage]
})
export class ProgressIndicatorsPageModule {}
