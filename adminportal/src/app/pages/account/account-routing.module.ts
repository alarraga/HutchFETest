import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';

const routes: Routes = [{
  path: '',
  component: AccountComponent,
  children: [{
    path: '',
    component: ManageAccountComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
