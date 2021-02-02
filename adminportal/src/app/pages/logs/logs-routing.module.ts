import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogsComponent } from './logs.component';
import { ViewLogsComponent } from './view-logs/view-logs.component';

const routes: Routes = [{
  path: '',
  component: LogsComponent,
  children: [{
    path: '',
    component: ViewLogsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogsRoutingModule { }
