import { Injectable } from '@angular/core';
import { Friend } from '../model/Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: Friend[]

  constructor() {
    let dates: Date[] = [];
    for (let i = 1 ; i < 7; i++) {
      let date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date);
    }
    this.friends = [
        new Friend("Jean", 104, dates[0], "Listen, I've had a pretty messed up day..."),
        new Friend("Paul", 94, dates[1], "Listen, I've had a pretty messed up day..."),
        new Friend("Pierre", 68, dates[2], "Listen, I've had a pretty messed up day..."),
        new Friend("Laura", 41, dates[3], "Listen, I've had a pretty messed up day..."),
        new Friend("Théo", 24, dates[4], "Listen, I've had a pretty messed up day..."),
        new Friend("Marie", 12, dates[5], "Listen, I've had a pretty messed up day..."),
    ]
  }

  async getFriends():Promise<Friend[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.friends);
    })
  }
}