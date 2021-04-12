import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/Category';
import { Periodicity } from '../model/Periodicity';
import { Priority } from '../model/Priority';
import { Resolution } from '../model/Resolution';
import { ResolutionTypesEnum } from '../model/ResolutionTypesEnum';
import { Storage } from '@ionic/storage-angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-create-resolution',
  templateUrl: './create-resolution.page.html',
  styleUrls: ['./create-resolution.page.scss'],
})
export class CreateResolutionPage implements OnInit {

  resolutionType: ResolutionTypesEnum
  resolutionTypeNb: number;
  nom: string;
  notes: string;
  objectif: number;
  initial: number;
  unite: string;
  selectedFrequence: number = 0;
  selectedCategorie: number = 0;
  selectedPriorite: number = 0;
  notificationOn : boolean = true;
  date: String;
  heure: String;
  frequences: String[] = Object.keys(Periodicity).filter(k => typeof Periodicity[k as any] === "number");
  categories: String[] = Object.keys(Category).filter(k => typeof Category[k as any] === "number");
  priorites: String[] = Object.keys(Priority).filter(k => typeof Priority[k as any] === "number");

  minDate: string = new Date().toISOString();
  maxData : any = (new Date()).getFullYear() + 3;

  placeholders: any = {
    nom: ["Ex: Perdre du poids", "Ex: Manger 5 fruits et légumes par jour", "Ex: Ne pas manger du chocolat plus de 2 fois par semaine", "Ne pas s'énerver trop rapidement"],
    objectif: ["Ex: 80", "Ex: 5", "Ex: 2", null],
    objectifTitre: ["Objectif", "Nombre d'action à faire", "Nombre d'action max", null],
    unite: ["Ex: kg", null, null, null],
    initial: ["Ex: 90", null, null, null],
    progression: ["Progression", "Progression", "Limite", null]
  }

  constructor(private route: Router, private activatedRoute: ActivatedRoute, private storage: Storage,public toastController: ToastController) {}

  async ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.resolutionType = ResolutionTypesEnum[id];
    this.resolutionTypeNb = parseInt(id);

    await this.storage.create();
  }

  numberOnlyValidation(event: any) {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  checkForm() {
    if (!this.nom) {
      this.presentToast("Le nom de la résolution n'est pas renseigné", "danger");
      return ;
    }

    this.createResolution();
  }

  async createResolution() {
    let r_periodicity : Periodicity = null;
    let r_dateDeb : Date = null;
    let r_objectif : number = null;
    let r_initial : number = null;
    let r_unite: string = null;

    if (this.resolutionType != ResolutionTypesEnum.PERMANENT) {
      r_periodicity = Periodicity[Periodicity[this.selectedFrequence]];
      if (r_periodicity == Periodicity.Unique) r_periodicity = null;
      r_dateDeb = new Date();
      r_objectif = this.objectif;
      r_initial = this.resolutionTypeNb == ResolutionTypesEnum.GOAL ? this.initial : 0
      r_unite = this.resolutionTypeNb == ResolutionTypesEnum.GOAL ? this.unite : "fois" 
    }

    let resolution = new Resolution(
      this.nom,
      this.notes,
      this.resolutionTypeNb,
      r_periodicity,
      Category[Category[this.selectedCategorie]],
      Priority[Priority[this.selectedPriorite]],
      r_dateDeb,
      r_objectif,
      r_initial,
      r_initial,
      r_unite
    )

    // Get all created resolutions
    let resolutions = await this.storage.get('resolutions');
    if (!resolutions) {
      resolutions = [];
    }
    // Add the new resolution to the list
    resolutions.push(resolution);
    // Save the new list in storage
    await this.storage.set('resolutions', resolutions);

    this.presentToast("Nouvelle résolution ajoutée !", "success")

    //Go back to resolution page
    this.route.navigate(['/myresolutions']);
  }

  async presentToast(message, color) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }


}
