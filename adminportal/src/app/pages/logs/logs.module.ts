import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogsRoutingModule } from './logs-routing.module';
import { LogsComponent } from './logs.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';
import { DumpContentComponent } from './dump-content/dump-content.component';


@NgModule({
  declarations: [LogsComponent, ViewLogsComponent, DumpContentComponent],
  imports: [
    CommonModule,
    LogsRoutingModule
  ]
})
export class LogsModule { }
