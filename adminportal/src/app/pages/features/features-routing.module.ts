import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllFeaturesComponent } from './all-features/all-features.component';
import { FeaturesComponent } from './features.component';

const routes: Routes = [{
  path: '',
  component: FeaturesComponent,
  children: [
    {
      path: '',
      component: AllFeaturesComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
