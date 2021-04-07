import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyresolutionsPageRoutingModule } from './myresolutions-routing.module';

import { MyresolutionsPage } from './myresolutions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyresolutionsPageRoutingModule
  ],
  declarations: [MyresolutionsPage]
})
export class MyresolutionsPageModule {}
