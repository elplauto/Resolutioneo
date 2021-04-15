import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResolutionsService } from '../api/resolutions.service';
import { Resolution } from '../model/Resolution';
import { Storage } from '@ionic/storage-angular';
import { Log } from '../model/Log';
import { ToastController } from '@ionic/angular';

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

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private storage: Storage, public toastController: ToastController) {}

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewDidEnter() {
    this.loadResolutions();
  }

  async loadResolutions() {
    this.resolutions = [];
    this.resolutionsService = new ResolutionsService();
    try {
      let resolutionsTemp = await this.resolutionsService.getResolutions()
      this.resolutions.push(...resolutionsTemp);
    } catch(err) {
      console.log(err)
    }
    let createdResolutions = await this.storage.get('resolutions');
    if (createdResolutions) {
      this.resolutions.push(...createdResolutions);
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

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

}
