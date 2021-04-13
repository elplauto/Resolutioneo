import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseResolutionOriginPageRoutingModule } from './choose-resolution-origin-routing.module';

import { ChooseResolutionOriginPage } from './choose-resolution-origin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseResolutionOriginPageRoutingModule
  ],
  declarations: [ChooseResolutionOriginPage]
})
export class ChooseResolutionOriginPageModule {}
