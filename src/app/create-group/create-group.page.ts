import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';
import { Log } from '../model/Log';
import { Group } from '../model/Group';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private storage: Storage,public toastController: ToastController) {}

  nom: string;

  ngOnInit() {
    this.storage.create();
  }

  checkForm() {
    this.addLog("Clic bouton créer groupe")

    // TO DO : Verifier que tous les champs sont bien remplis
    if (!this.nom) {
      this.presentToast("Nom du groupe non renseigné", "danger");
    } /*else if (!this.objectif && this.resolutionTypeNb != 3) {
      this.presentToast(this.placeholders.objectifTitre[this.resolutionTypeNb] + " non renseigné", "danger");
    } else if (!this.unite && this.resolutionTypeNb == 0) {
      this.presentToast("Unit énon renseignée", "danger");
    } else if (!this.initial && this.resolutionTypeNb == 0) {
      this.presentToast("Point de départ non renseigné", "danger");
    }*/ else {
      this.addLog("Groupe créé");
      this.createGroup();
    }
  }

  async createGroup() {
    let group = new Group(
      this.nom,
      new Date(),
      "Vous venez de créer ce groupe"
    );

    // Get all created groups
    let groups = await this.storage.get('groups');
    if (!groups) {
      groups = [];
    }
    // Add the new group to the list
    groups.push(group);
    // Save the new list in storage
    await this.storage.set('groups', groups);

    this.presentToast("Nouveau groupe créé !", "success")

    //Go back to conversations page
    this.route.navigate(['/conversations']);
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
