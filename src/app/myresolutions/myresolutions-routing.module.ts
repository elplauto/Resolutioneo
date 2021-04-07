import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyresolutionsPage } from './myresolutions.page';

const routes: Routes = [
  {
    path: '',
    component: MyresolutionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyresolutionsPageRoutingModule {}
