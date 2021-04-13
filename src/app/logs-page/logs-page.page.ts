import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-logs-page',
  templateUrl: './logs-page.page.html',
  styleUrls: ['./logs-page.page.scss'],
})
export class LogsPagePage implements OnInit {

  logs: string

  constructor(private storage: Storage) { }

  async ngOnInit() {
    await this.storage.create();
  }

  async ionViewDidEnter() {
    // Get all logs
    let logs = await this.storage.get('logs');
    console.log(logs)
    this.logs = "";
    if (logs) {
      for (let i = 0; i < logs.length; i++) {
        this.logs += logs[i].message + " "
      }
    }
  }

}
