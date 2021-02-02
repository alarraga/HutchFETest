import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { AllFeaturesComponent } from './all-features/all-features.component';
import { FeaturesComponent } from './features.component';
import { FuelComponent } from './fuel/fuel.component';
import { DailyGiftComponent } from './daily-gift/daily-gift.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AllFeaturesComponent, FeaturesComponent, FuelComponent, DailyGiftComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    FormsModule
  ]
})
export class FeaturesModule { }
