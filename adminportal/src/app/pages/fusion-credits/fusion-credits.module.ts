import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FusionCreditsRoutingModule } from './fusion-credits-routing.module';
import { FusionCreditsComponent } from './fusion-credits.component';
import { ViewFusionComponent } from './view-fusion/view-fusion.component';


@NgModule({
  declarations: [FusionCreditsComponent, ViewFusionComponent],
  imports: [
    CommonModule,
    FusionCreditsRoutingModule
  ]
})
export class FusionCreditsModule {

  decreaseItem(viewChild: HTMLInputElement) {
    viewChild.value = String(Number(viewChild.value)-1);
  }
  increaseItem(viewChild: HTMLInputElement) {
    viewChild.value = String(Number(viewChild.value) + 1);
  }
}
