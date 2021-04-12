import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateResolutionPageRoutingModule } from './create-resolution-routing.module';

import { CreateResolutionPage } from './create-resolution.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateResolutionPageRoutingModule
  ],
  declarations: [CreateResolutionPage]
})
export class CreateResolutionPageModule {}
