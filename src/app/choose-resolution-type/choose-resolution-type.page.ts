import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResolutionTypeService } from '../api/resolution-type.service';
import { ResolutionType } from '../model/ResolutionType';

@Component({
  selector: 'app-choose-resolution-type',
  templateUrl: './choose-resolution-type.page.html',
  styleUrls: ['./choose-resolution-type.page.scss'],
})
export class ChooseResolutionTypePage implements OnInit {

  resolutionTypeService: ResolutionTypeService
  resolutionTypes: ResolutionType[]

  constructor(private route: Router) { }

  ngOnInit() {
    this.loadResolutionTypes();
  }

  async loadResolutionTypes() {
    this.resolutionTypeService = new ResolutionTypeService();
    try {
      let resolutionTypes = await this.resolutionTypeService.getResolutionType()
      this.resolutionTypes = resolutionTypes
    } catch(err) {
      console.log(err)
    }
  }

}
