import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';
import { Manufacturer } from '../../../enums/Manufacturer';

@Component({
  selector: 'app-view-fusion',
  templateUrl: './view-fusion.component.html',
  styleUrls: ['./view-fusion.component.scss']
})
export class ViewFusionComponent implements OnInit {
  portalSync: PortalSync;
  carManufacturerEnumMap= {};
  constructor(private portalSyncService: PortalSyncService) { }

  ngOnInit(): void {
    Object.keys(Manufacturer).forEach((manufacturer) => {
      this.carManufacturerEnumMap[Manufacturer[manufacturer]] = manufacturer;
    });
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
