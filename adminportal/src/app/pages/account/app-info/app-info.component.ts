import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.component.html',
  styleUrls: ['./app-info.component.scss']
})
export class AppInfoComponent implements OnInit {
  portalSync: PortalSync;
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.portalSync = portalSyncResponse;
    });
  }

}
