import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AlertController, ToastController } from '@ionic/angular';
import { Log } from '../model/Log';
import { Group } from '../model/Group';
import { Category } from '../model/Category';
import { Friend } from '../model/Friend';
import { FriendsService } from '../api/friends.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.page.html',
  styleUrls: ['./create-group.page.scss'],
})
export class CreateGroupPage implements OnInit {

  nom: string;
  selectedCategorie: number = 0;
  notificationOn : boolean = true;
  friends: Friend[]
  amiAjoute: Friend[]
  nbAmi: number = 0;

  categories: String[] = Object.keys(Category).filter(k => typeof Category[k as any] === "number");

  constructor(public friendsService: FriendsService, private route: Router, private activatedRoute: ActivatedRoute, private storage: Storage, public toastController: ToastController, public alertController: AlertController) {}

  ngOnInit() {
    this.storage.create();
    this.loadFriends();
  }

  async loadFriends() {

    // load friends
    this.friends = [];
    let friendsTemp = await this.friendsService.getFriends();
    this.friends.push(...friendsTemp);

    this.amiAjoute = [];
  }

  async addFriend() {
    var options = {
      inputs: [],
      header: 'Amis',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Ok',
          handler: data => {
            this.amiAjoute.push(...data);
            this.nbAmi = this.amiAjoute.length;
          }
        }
      ]
    };

    for(let i=0; i< this.friends.length; i++) {
      if(!this.amiAjoute.includes(this.friends[i])){
        options.inputs.push({ name : 'check', value: this.friends[i], label: this.friends[i].nom, type: 'checkbox' });
      }
    }

    const alert = await this.alertController.create(options);
    await alert.present();
  }

  async delFriend(friend: Friend) {
    this.amiAjoute.splice(this.amiAjoute.indexOf(friend), 1);
    this.nbAmi--;
    console.log(this.amiAjoute);
  }

  checkForm() {
    this.addLog("Clic bouton créer groupe")

    if (!this.nom) {
      this.presentToast("Nom du groupe non renseigné", "danger");
    }
    else {
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
