import { Injectable } from '@angular/core';
import { Group } from '../model/Group';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  groups: Group[]

  constructor() {
    let dates: Date[] = [];
    for (let i = 1 ; i < 3; i++) {
      let date = new Date();
      date.setDate(date.getDate() - i);
      dates.push(date);
    }
    this.groups = [
        new Group("Les invicibles", dates[0], "Listen, I've had a pretty messed up day..."),
        new Group("Les sportifs", dates[1], "Listen, I've had a pretty messed up day..."),
    ]
  }

  async getGroups():Promise<Group[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.groups);
    })
  }
}