import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResourcesComponent } from './resources.component';
import { AllResourcesComponent } from './all-resources/all-resources.component';

const routes: Routes = [{
  path: '',
  component: ResourcesComponent,
  children: [{
    path: '',
    component: AllResourcesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResourcesRoutingModule { }
