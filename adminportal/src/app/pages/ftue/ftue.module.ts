import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FtueRoutingModule } from './ftue-routing.module';
import { FtueComponent } from './ftue.component';
import { ViewFtueComponent } from './view-ftue/view-ftue.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [FtueComponent, ViewFtueComponent],
  imports: [
    CommonModule,
    FtueRoutingModule,
    FormsModule
  ]
})
export class FtueModule { }
