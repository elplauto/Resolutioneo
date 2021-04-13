import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private storage: Storage, public toastController: ToastController) {}


  async ngOnInit() {
    await this.storage.create();
  }

  async resetResolutions() {
    await this.storage.remove("resolutions");
    this.presentToast("Résolutions réinitialisées avec succès");
  }

  async resetGroups() {
    await this.storage.remove("groups");
    this.presentToast("Groupes réinitialisés avec succès");
  }

  async resetLogs() {
    await this.storage.remove("logs");
    this.presentToast("Logs réinitialisés avec succès");
  }

  async resetAll() {
    await this.storage.clear();
    this.presentToast("Données réinitialisées avec succès");
  }

  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: "success"
    });
    toast.present();
  }



}
