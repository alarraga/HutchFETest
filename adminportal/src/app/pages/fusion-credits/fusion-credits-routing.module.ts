import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FusionCreditsComponent } from './fusion-credits.component';
import { ViewFusionComponent } from './view-fusion/view-fusion.component';

const routes: Routes = [{
  path: '',
  component: FusionCreditsComponent,
  children: [{
    path: '',
    component: ViewFusionComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FusionCreditsRoutingModule { }
