import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { SocialMediaComponent } from './social-media.component';
import { SocialDetailsComponent } from './social-details/social-details.component';
import { DumpContentComponent } from './dump-content/dump-content.component';


@NgModule({
  declarations: [SocialMediaComponent, SocialDetailsComponent, DumpContentComponent],
  imports: [
    CommonModule,
    SocialMediaRoutingModule
  ]
})
export class SocialMediaModule { }
