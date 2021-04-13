import { Component, OnInit } from '@angular/core';
import { FriendsService } from '../api/friends.service';
import { Friend } from '../model/Friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends: Friend[]

  constructor(public friendsService: FriendsService) { }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.loadFriends();
  }

  async loadFriends() {
    try {
      let friends = await this.friendsService.getFriends()
      this.friends = friends
    } catch(err) {
      console.log(err)
    }
  }

}
