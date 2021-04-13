import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogsPagePageRoutingModule } from './logs-page-routing.module';

import { LogsPagePage } from './logs-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogsPagePageRoutingModule
  ],
  declarations: [LogsPagePage]
})
export class LogsPagePageModule {}
