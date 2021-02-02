import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceiptsRoutingModule } from './receipts-routing.module';
import { ReceiptsComponent } from './receipts.component';
import { ReceiptsViewComponent } from './receipts-view/receipts-view.component';
import { IapReceiptsComponent } from './iap-receipts/iap-receipts.component';
import { OfferReceiptsComponent } from './offer-receipts/offer-receipts.component';


@NgModule({
  declarations: [ReceiptsComponent, ReceiptsViewComponent, IapReceiptsComponent, OfferReceiptsComponent],
  imports: [
    CommonModule,
    ReceiptsRoutingModule
  ]
})
export class ReceiptsModule { }
