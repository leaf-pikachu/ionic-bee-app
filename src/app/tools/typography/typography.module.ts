import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TypographyPageRoutingModule } from './typography-routing.module';

import { TypographyPage } from './typography.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TypographyPageRoutingModule
  ],
  declarations: [TypographyPage]
})
export class TypographyPageModule {}
