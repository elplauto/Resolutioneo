import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MygroupsPage } from './mygroups.page';

const routes: Routes = [
  {
    path: '',
    component: MygroupsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MygroupsPageRoutingModule {}
