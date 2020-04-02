import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from 'src/app/layout/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class LayoutModule {}
