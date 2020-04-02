import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BadgePageRoutingModule } from './badge-routing.module';

import { BadgePage } from './badge.page';
import { LayoutModule } from 'src/app/layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BadgePageRoutingModule,
    LayoutModule
  ],
  declarations: [BadgePage]
})
export class BadgePageModule {}
