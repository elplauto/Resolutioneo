import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseResolutionOriginPage } from './choose-resolution-origin.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseResolutionOriginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseResolutionOriginPageRoutingModule {}
