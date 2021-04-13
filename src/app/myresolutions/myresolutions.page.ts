import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolutionsService } from '../api/resolutions.service';
import { Resolution } from '../model/Resolution';
import { Storage } from '@ionic/storage-angular';
import { Log } from '../model/Log';

@Component({
  selector: 'app-myresolutions',
  templateUrl: './myresolutions.page.html',
  styleUrls: ['./myresolutions.page.scss'],
})
export class MyresolutionsPage implements OnInit {
  resolutionsService: ResolutionsService
  resolutions: Resolution[]

  placeholders: any = {
    progression: ["Progression", "Progression", "Limite", null]
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private storage: Storage) {}

  async ngOnInit() {
    await this.storage.create();
    this.loadResolutions();
  }

  async ionViewDidEnter() {
    this.loadResolutions();
  }

  async loadResolutions() {
    this.resolutionsService = new ResolutionsService();
    try {
      let resolutions = await this.resolutionsService.getResolutions()
      this.resolutions = resolutions
    } catch(err) {
      console.log(err)
    }
    let createdResolutions = await this.storage.get('resolutions');
    if (createdResolutions) {
      for (let i = 0; i < createdResolutions.length; i++) {
        this.resolutions.push(createdResolutions[i]);
      }
    }
  }

  async addLog(message) {
    let logs: Log[] = await this.storage.get('logs');
    if (!logs) {
      logs = [];
    }
    logs.push(new Log(message));
    await this.storage.set('logs', logs);
  }

}
