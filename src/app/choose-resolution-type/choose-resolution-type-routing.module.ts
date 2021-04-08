import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChooseResolutionTypePage } from './choose-resolution-type.page';

const routes: Routes = [
  {
    path: '',
    component: ChooseResolutionTypePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseResolutionTypePageRoutingModule {}
