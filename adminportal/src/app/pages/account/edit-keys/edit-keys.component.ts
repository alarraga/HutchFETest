import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';

@Component({
  selector: 'app-edit-keys',
  templateUrl: './edit-keys.component.html',
  styleUrls: ['./edit-keys.component.scss']
})
export class EditKeysComponent implements OnInit {
  portalSync: PortalSync;
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.portalSync = portalSyncResponse;
    });
  }
  onSubmit() {

  }
  cancel() {

  }
  decreaseItem(viewChild: HTMLInputElement) {
    viewChild.value = String(Number(viewChild.value)-1);
  }
  increaseItem(viewChild: HTMLInputElement) {
    viewChild.value = String(Number(viewChild.value) + 1);
  }
}
