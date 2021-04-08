import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChooseResolutionTypePageRoutingModule } from './choose-resolution-type-routing.module';

import { ChooseResolutionTypePage } from './choose-resolution-type.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChooseResolutionTypePageRoutingModule
  ],
  declarations: [ChooseResolutionTypePage]
})
export class ChooseResolutionTypePageModule {}
