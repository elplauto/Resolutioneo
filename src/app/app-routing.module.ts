import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'myresolutions',
    pathMatch: 'full'
  },
  {
    path: 'myresolutions',
    loadChildren: () => import('./myresolutions/myresolutions.module').then( m => m.MyresolutionsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then( m => m.FriendsPageModule)
  },
  {
    path: 'mygroups',
    loadChildren: () => import('./mygroups/mygroups.module').then( m => m.MygroupsPageModule)
  },
  {
    path: 'choose-resolution-type',
    loadChildren: () => import('./choose-resolution-type/choose-resolution-type.module').then( m => m.ChooseResolutionTypePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
