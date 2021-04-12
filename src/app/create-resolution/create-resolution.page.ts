import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../model/Category';
import { Periodicity } from '../model/Periodicity';
import { Priority } from '../model/Priority';
import { ResolutionTypesEnum } from '../model/ResolutionTypesEnum';

@Component({
  selector: 'app-create-resolution',
  templateUrl: './create-resolution.page.html',
  styleUrls: ['./create-resolution.page.scss'],
})
export class CreateResolutionPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  resolutionType: ResolutionTypesEnum
  nom: String;
  notes: String;
  objectif: number;
  initial: number;
  actual: number;
  selectedFrequence: Number = 0;
  selectedCategorie: Number = 0;
  selectedPriorite: Number = 0;
  notificationOn : boolean = true;
  date: String;
  heure: String;
  frequences: String[] = Object.keys(Periodicity).filter(k => typeof Periodicity[k as any] === "number");
  categories: String[] = Object.keys(Category).filter(k => typeof Category[k as any] === "number");
  priorites: String[] = Object.keys(Priority).filter(k => typeof Priority[k as any] === "number");

  minDate: string = new Date().toISOString();
  maxData : any = (new Date()).getFullYear() + 3;

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.resolutionType = ResolutionTypesEnum[id];
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }


}
