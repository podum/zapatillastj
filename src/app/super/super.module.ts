import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuperPageRoutingModule } from './super-routing.module';

import { SuperPage } from './super.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuperPageRoutingModule
  ],
  declarations: [SuperPage]
})
export class SuperPageModule {}
