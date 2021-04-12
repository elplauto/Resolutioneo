import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateResolutionPage } from './create-resolution.page';

const routes: Routes = [
  {
    path: '',
    component: CreateResolutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateResolutionPageRoutingModule {}
