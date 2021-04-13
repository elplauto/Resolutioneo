import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Log } from '../model/Log';

@Component({
  selector: 'app-choose-resolution-origin',
  templateUrl: './choose-resolution-origin.page.html',
  styleUrls: ['./choose-resolution-origin.page.scss'],
})
export class ChooseResolutionOriginPage implements OnInit {

  constructor(private storage: Storage,public toastController: ToastController) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

  async addLog(message) {
    let logs: Log[] = await this.storage.get('logs');
    if (!logs) {
      logs = [];
    }
    logs.push(new Log(message));
    await this.storage.set('logs', logs);
  }

  explore() {
    this.addLog("Choix resolution existante");
    this.presentToast("Fonctionnalité non implémentée", "danger");
  }

}
