import { Conversation } from '../model/Conversation';
import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../api/friends.service';
import { Friend } from '../model/Friend';
import { Group } from '../model/Group';
import { GroupsService } from '../api/groups.service';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  friends: Friend[]
  groups: Group[]
  groupsCreatedByUser: Group[]
  conversations: Conversation[]

  constructor(public friendsService: FriendsService, public groupsService: GroupsService, private storage: Storage, public toastController: ToastController) { }

  ngOnInit() {
    this.storage.create();
  }

  async ionViewDidEnter() {
    this.loadConversations();
  }

  async loadConversations() {

    // load friends
    this.friends = [];
    let friendsTemp = await this.friendsService.getFriends();
    this.friends.push(...friendsTemp)

    // load groups
    this.groups = [];
    let groupsTemp = await this.groupsService.getGroups();
    this.groups.push(...groupsTemp)

    //load group created 
    this.groupsCreatedByUser = [];
    let groupsCreatedByUser = await this.storage.get('groups');
    if (groupsCreatedByUser) {
        this.groupsCreatedByUser.push(...groupsCreatedByUser);
    }

    //create conv
    this.conversations = [];

    for (let i = 0; i < this.friends.length; i++) {
      let friend = this.friends[i];
      this.conversations.push(new Conversation(
        friend.nom,
        "../../assets/images/avatar.svg",
        friend.lastMsg.date,
        friend.lastMsg.preview,
        0)
      );
    }

    for (let i = 0; i < this.groups.length; i++) {
      let group = this.groups[i];
      this.conversations.push(new Conversation(
        group.nom,
        "../../assets/images/group.png",
        group.lastMsg.date,
        group.lastMsg.preview,
        0)
      );
    }

    for (let i = 0; i < this.groupsCreatedByUser.length; i++) {
      let group = this.groupsCreatedByUser[i];
      this.conversations.push(new Conversation(
        group.nom,
        "../../assets/images/group.png",
        group.lastMsg.date,
        group.lastMsg.preview,
        1)
      );
    }

    this.conversations.sort(this.sortConv);
  }

  sortConv(a: Conversation, b: Conversation) {
    return b.lastMsg.date.getTime() - a.lastMsg.date.getTime();
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

