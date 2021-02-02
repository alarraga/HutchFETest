import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsComponent } from './receipts.component';
import { ReceiptsViewComponent } from './receipts-view/receipts-view.component';

const routes: Routes = [{
  path: '',
  component: ReceiptsComponent,
  children: [{
    path: '',
    component: ReceiptsViewComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsRoutingModule { }
