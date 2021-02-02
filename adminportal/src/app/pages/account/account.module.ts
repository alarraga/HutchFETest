import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { ManageAccountComponent } from './manage-account/manage-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditKeysComponent } from './edit-keys/edit-keys.component';
import { AppInfoComponent } from './app-info/app-info.component';


@NgModule({
  declarations: [AccountComponent, ManageAccountComponent, EditKeysComponent, AppInfoComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
