import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Log } from '../model/Log';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.page.html',
  styleUrls: ['./forums.page.scss'],
})
export class ForumsPage implements OnInit {

  constructor(private storage: Storage,public toastController: ToastController) { 
    this.storage.create();
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.presentToast("Page non implémentée", "danger");
    this.addLog("clic page forums");
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

}
