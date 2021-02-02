import { Component, OnInit } from '@angular/core';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';
import { Car } from '../../../interfaces/models/Car';
import { StaticData } from '../../../interfaces/responses/StaticData';
import { StaticDataService } from '../../../services/static-data.service';
import { UserCar } from '../../../interfaces/models/UserCar';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {
  portalSync: PortalSync;
  staticData: StaticData;
  currentRate = 8;
  carsMap: Map<string, Car> = new Map<string, Car>();
  constructor(private portalSyncService: PortalSyncService,
              private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder")
      .subscribe(staticDataResponse => {
      this.staticData = staticDataResponse;
      // Additional cars map is needed to get static car data by carId as user cars doesn't contain all the required visual properties (e.g car model)
      for (let i = 0; i < this.staticData.cars.length; i++) {
        this.carsMap.set(this.staticData.cars[i].carId, this.staticData.cars[i]);
      }
        this.getPortalSync();
    });
  }


  private getPortalSync(): void {
      this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
          this.portalSync = portalSyncResponse;
      });
  }
  onSelectCar(car: UserCar) {

  }
  onRemoveCar(car: UserCar) {

  }
}
