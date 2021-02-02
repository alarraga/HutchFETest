import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { AllResourcesComponent } from './all-resources/all-resources.component';
import { CarsComponent } from './cars/cars.component';
import { SpecialResourcesComponent } from './special-resources/special-resources.component';
import { AugmentsComponent } from './augments/augments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ResourcesComponent, AllResourcesComponent, CarsComponent, SpecialResourcesComponent, AugmentsComponent],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    FormsModule,
    NgxPaginationModule,
    SharedModule
  ]
})
export class ResourcesModule { }
