import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SocialMediaComponent } from './social-media.component';
import { SocialDetailsComponent } from './social-details/social-details.component';

const routes: Routes = [{
  path: '',
  component: SocialMediaComponent,
  children: [{
    path: '',
    component: SocialDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialMediaRoutingModule { }
