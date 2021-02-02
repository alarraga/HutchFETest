import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';

@Component({
  selector: 'app-dump-content',
  templateUrl: './dump-content.component.html',
  styleUrls: ['./dump-content.component.scss']
})
export class DumpContentComponent implements OnInit {
  portalSync: PortalSync;
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.portalSync = portalSyncResponse;
    });
  }

}
