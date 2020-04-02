import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToolsPageRoutingModule } from './tools-routing.module';

import { ToolsPage } from './tools.page';
import { LayoutModule } from '../layout/layout.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToolsPageRoutingModule,
    LayoutModule
  ],
  declarations: [ToolsPage]
})
export class ToolsPageModule {}
