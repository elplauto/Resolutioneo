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
    path: 'choose-resolution-type',
    loadChildren: () => import('./choose-resolution-type/choose-resolution-type.module').then( m => m.ChooseResolutionTypePageModule)
  },
  {
    path: 'create-resolution/:id',
    loadChildren: () => import('./create-resolution/create-resolution.module').then( m => m.CreateResolutionPageModule)
  },
  {
    path: 'logs-page',
    loadChildren: () => import('./logs-page/logs-page.module').then( m => m.LogsPagePageModule)
  },
  {
    path: 'ranking',
    loadChildren: () => import('./ranking/ranking.module').then( m => m.RankingPageModule)
  },
  {
    path: 'conversations',
    loadChildren: () => import('./conversations/conversations.module').then( m => m.ConversationsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'forums',
    loadChildren: () => import('./forums/forums.module').then( m => m.ForumsPageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('./create-group/create-group.module').then( m => m.CreateGroupPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
