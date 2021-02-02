import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

export const routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [

      {
        path: '',
        redirectTo: 'account'
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then(m => m.AccountModule), data: { breadcrumb: 'Account Information' }
      },
      {
        path: 'logs',
        loadChildren: () => import('../logs/logs.module').then(m => m.LogsModule), data: { breadcrumb: 'Logs' }
      },
      {
        path: 'receipts',
        loadChildren: () => import('../receipts/receipts.module').then(m => m.ReceiptsModule), data: { breadcrumb: 'Receipts' }
      },
      {
        path: 'social-media',
        loadChildren: () => import('../social-media/social-media.module').then(m => m.SocialMediaModule), data: { breadcrumb: 'Receipts' }
      },
      {
        path: 'resources',
        loadChildren: () => import('../resources/resources.module').then(m => m.ResourcesModule), data: { breadcrumb: 'Resources' }
      },
      {
        path: 'features',
        loadChildren: () => import('../features/features.module').then(m => m.FeaturesModule), data: { breadcrumb: 'Features' }
      },
      {
        path: 'ftue',
        loadChildren: () => import('../ftue/ftue.module').then(m => m.FtueModule), data: { breadcrumb: 'FTUE' }
      },
      {
        path: 'fusion-credits',
        loadChildren: () => import('../fusion-credits/fusion-credits.module').then(m => m.FusionCreditsModule), data: { breadcrumb: 'Fusion Credits' }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
