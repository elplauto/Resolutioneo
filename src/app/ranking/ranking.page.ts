import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../api/friends.service';
import { Friend } from '../model/Friend';
import { Log } from '../model/Log';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  friends: Friend[]

  constructor(public friendsService: FriendsService, private storage: Storage) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.loadFriends();
    this.addLog("clic page explorer");
  }

  async loadFriends() {
    this.friends = [];
    try {
      let friendsTemp = await this.friendsService.getFriends();
      this.friends.push(...friendsTemp)
    } catch(err) {
      console.log(err)
    }
    this.friends.push(new Friend("Vous", 71, null, ""));
    this.friends.sort(this.sortByPoints);
  }

  sortByPoints(a: Friend, b: Friend) {
    return b.points - a.points;
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
