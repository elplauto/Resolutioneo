import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResolutionsService } from '../api/resolutions.service';
import { Resolution } from '../model/Resolution';

@Component({
  selector: 'app-myresolutions',
  templateUrl: './myresolutions.page.html',
  styleUrls: ['./myresolutions.page.scss'],
})
export class MyresolutionsPage implements OnInit {
  resolutionsService: ResolutionsService
  resolutions: Resolution[]

  constructor(private route: Router) { }

  ngOnInit() {
    this.loadResolutions();
  }

  async loadResolutions() {
    this.resolutionsService = new ResolutionsService();
    try {
      let resolutions = await this.resolutionsService.getResolutions()
      this.resolutions = resolutions
    } catch(err) {
      console.log(err)
    }
  }

}
