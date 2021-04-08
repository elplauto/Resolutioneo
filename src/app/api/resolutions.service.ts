import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { Periodicity } from '../model/Periodicity';
import { Priority } from '../model/Priority';
import { Resolution } from '../model/Resolution';

@Injectable({
  providedIn: 'root'
})
export class ResolutionsService {
  resolutions: Resolution[]

  constructor() { 
    this.resolutions = [
      new Resolution("Faire du sport tous les jours", Periodicity.Quotidienne, Category.Sport, new Date(), Priority.Forte),
      new Resolution("Courir 1 fois par semaine", Periodicity.Hebdomadaire, Category.Sport, new Date(), Priority.Forte),
      new Resolution("Se limiter à un fastfood par mois", Periodicity.Mensuelle, Category.Alimentation, new Date(), Priority.Moyenne)
    ]
  }

  async getResolutions():Promise<Resolution[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.resolutions);
    })
  }
}
