import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        redirectTo: 'hutch',
        pathMatch: 'full'
      },
      {
        path: 'hutch',
        data: {
          breadcrumb: 'pages',
        },
        loadChildren: () => import('./pages/pages/pages.module').then(m => m.PagesModule)
      },
      { path: '**', component: NotFoundComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes
    , {
      //preloadingStrategy: PreloadAllModules,  // <- comment this line for activate lazy load
      // useHash: true
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
