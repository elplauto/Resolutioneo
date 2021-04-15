import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Mes résolutions', url: '/myresolutions', icon: 'calendar' },
    { title: 'Explorer', url: '/explore', icon: 'rocket' },
    { title: 'Conversations', url: '/conversations', icon: 'chatbubbles' },
    { title: 'Forums', url: '/forums', icon: 'people' },
    { title: 'Classement', url: '/ranking', icon: 'podium' },
    { title: 'Paramètres', url: '/settings', icon: 'settings' }
  ];
  constructor() {}
}
