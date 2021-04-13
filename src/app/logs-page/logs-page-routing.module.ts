import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogsPagePage } from './logs-page.page';

const routes: Routes = [
  {
    path: '',
    component: LogsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogsPagePageRoutingModule {}
