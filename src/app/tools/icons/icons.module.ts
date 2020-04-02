import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IconsPageRoutingModule } from './icons-routing.module';

import { IconsPage } from './icons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IconsPageRoutingModule
  ],
  declarations: [IconsPage]
})
export class IconsPageModule {}
