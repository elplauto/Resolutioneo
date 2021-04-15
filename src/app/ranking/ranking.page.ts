import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../api/friends.service';
import { Friend } from '../model/Friend';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.page.html',
  styleUrls: ['./ranking.page.scss'],
})
export class RankingPage implements OnInit {

  friends: Friend[]

  constructor(public friendsService: FriendsService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.loadFriends();
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

}
