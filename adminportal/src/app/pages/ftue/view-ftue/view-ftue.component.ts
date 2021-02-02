import { Component, OnInit } from '@angular/core';
import { StaticData } from '../../../interfaces/responses/StaticData';
import { PortalSync } from '../../../interfaces/responses/PortalSync';
import { PortalSyncService } from '../../../services/portal-sync.service';
import { StaticDataService } from '../../../services/static-data.service';

@Component({
  selector: 'app-view-ftue',
  templateUrl: './view-ftue.component.html',
  styleUrls: ['./view-ftue.component.scss']
})
export class ViewFtueComponent implements OnInit {
  staticData: StaticData;
  portalSync: PortalSync;
  ftueConfig: any = null;
  orderedFTUEConfig: any = null;
  ftueStoryProgress;
  constructor(private portalSyncService: PortalSyncService,
    private staticDataService: StaticDataService) { }

  ngOnInit(): void {
    this.staticDataService.getStaticData("placeholder", "placeholder", "placeholder")
      .subscribe(staticDataResponse => {
        this.staticData = staticDataResponse;
        this.ftueConfig = this.staticData.ftueConfig;
        this.orderedFTUEConfig = {};
        Object.keys(this.ftueConfig).forEach((ftueVersion) => {
          if (!this.orderedFTUEConfig.hasOwnProperty(ftueVersion)) {
            this.orderedFTUEConfig[ftueVersion] = {};
          }

          Object.keys(this.ftueConfig[ftueVersion]).forEach((ftueStory) => {
            const ftueSteps = Object.keys(this.ftueConfig[ftueVersion][ftueStory]);
            const orderedFTUESteps = [];// new Array(ftueSteps.length);
            for (let i = 0; i < ftueSteps.length; i++) {
              for (let j = 0; j < ftueSteps.length; j++) {
                if (this.ftueConfig[ftueVersion][ftueStory][ftueSteps[j]] === i) {
                  orderedFTUESteps.push(ftueSteps[j]);
                  break;
                }
              }
            }
            this.orderedFTUEConfig[ftueVersion][ftueStory] = orderedFTUESteps;
          });
        });
        this.getPortalSync();
      });
  }
  private getPortalSync(): void {
    this.portalSyncService.getPortalSync("placeholder", "placeholder", "placeholder").subscribe(portalSyncResponse => {
      this.portalSync = portalSyncResponse;
    });
  }
  onSubmitStarted(ftu) {

  }
}
