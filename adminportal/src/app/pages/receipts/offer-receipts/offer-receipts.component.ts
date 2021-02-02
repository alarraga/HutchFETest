import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';

@Component({
  selector: 'app-offer-receipts',
  templateUrl: './offer-receipts.component.html',
  styleUrls: ['./offer-receipts.component.scss']
})
export class OfferReceiptsComponent implements OnInit {

  portalSync: PortalSync;
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.portalSync = portalSyncResponse;
    });
  }
}
