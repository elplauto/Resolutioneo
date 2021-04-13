import { Injectable } from '@angular/core';
import { Friend } from '../model/Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends: Friend[]

  constructor() { 
    this.friends = [
        new Friend("Jean"),
        new Friend("Paul"),
        new Friend("Pierre"),
        new Friend("Laura"),
        new Friend("Théo"),
        new Friend("Marie"),
    ]
  }

  async getFriends():Promise<Friend[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.friends);
    })
  }
}