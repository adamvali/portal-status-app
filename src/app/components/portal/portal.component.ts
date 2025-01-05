import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.css']
})
export class PortalComponent implements OnInit {
  portalStatus: string = 'DOWN';
  applications: any[] = [];

  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getPortalConfig().subscribe((config) => {
      this.portalStatus = config.portalStatus;
      this.applications = config.applications;
    });
  }
}
