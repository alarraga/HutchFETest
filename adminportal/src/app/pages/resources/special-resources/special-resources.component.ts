import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';
import { Resource } from '../../../interfaces/models/Resource';
import { StaticDataService } from '../../../services/static-data.service';
import { StaticData } from '../../../interfaces/responses/StaticData';

@Component({
  selector: 'app-special-resources',
  templateUrl: './special-resources.component.html',
  styleUrls: ['./special-resources.component.scss']
})
export class SpecialResourcesComponent implements OnInit {
  portalSync: PortalSync;
  staticData: StaticData;
  resourceMap: Map<string, Resource> = new Map<string, Resource>();
  constructor(private portalSyncService: PortalSyncService,
              private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder")
      .subscribe(staticDataResponse => {
        this.staticData = staticDataResponse;
        for (let i = 0; i < this.staticData.resources.length; i++) {
          this.resourceMap.set(this.staticData.resources[i].resourceId, this.staticData.resources[i]);
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
}
