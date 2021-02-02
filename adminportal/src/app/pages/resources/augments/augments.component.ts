import { Component, OnInit } from '@angular/core';
import { PortalSyncService } from '../../../services/portal-sync.service';
import { StaticDataService } from '../../../services/static-data.service';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { StaticData } from '../../../interfaces/responses/StaticData';
import { Augment } from '../../../interfaces/models/Augment';

@Component({
  selector: 'app-augments',
  templateUrl: './augments.component.html',
  styleUrls: ['./augments.component.scss']
})
export class AugmentsComponent implements OnInit {
  portalSync: PortalSync;
  staticData: StaticData;
  augmentMap: Map<string, Augment> = new Map<string, Augment>();
  constructor(private portalSyncService: PortalSyncService,
              private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder")
      .subscribe(staticDataResponse => {
        this.staticData = staticDataResponse;
        for (let i = 0; i < this.staticData.augments.length; i++) {
          this.augmentMap.set(this.staticData.augments[i].augmentId, this.staticData.augments[i]);
        }
        this.getPortalSync();
    });
  }
  private getPortalSync(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder")
      .subscribe(portalSyncResponse => {
        this.portalSync = portalSyncResponse;
    });
  }
  onUnequipAugment(augment) {

  }
  onRemoveAugment(augment) {

  }
}
