import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FtueComponent } from './ftue.component';
import { ViewFtueComponent } from './view-ftue/view-ftue.component';

const routes: Routes = [{
  path: '',
  component: FtueComponent,
  children: [
    {
      path: '',
      component: ViewFtueComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FtueRoutingModule { }
