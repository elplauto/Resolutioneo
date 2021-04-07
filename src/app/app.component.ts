import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes résolutions', url: '/myresolutions', icon: 'calendar' },
    { title: 'Mes amis', url: '/friends', icon: 'person' },
    { title: 'Mes groupes', url: '/mygroups', icon: 'people' },
    { title: 'Paramètres', url: '/settings', icon: 'settings' }
  ];
  constructor() {}
}
