import { Injectable } from '@angular/core';
import { Category } from '../model/Category';
import { Periodicity } from '../model/Periodicity';
import { Priority } from '../model/Priority';
import { Resolution } from '../model/Resolution';
import { ResolutionTypesEnum } from '../model/ResolutionTypesEnum';

@Injectable({
  providedIn: 'root'
})
export class ResolutionsService {
  resolutions: Resolution[]

  constructor() { 
    this.resolutions = [
      new Resolution("Courir 3 fois par semaine",
        ResolutionTypesEnum.NB_ACTIONS,
        Periodicity.Hebdomadaire,
        Category.Sport,
        Priority.Forte,
        new Date(),
        3,
        0,
        2),

      new Resolution("Se limiter à un fastfood par mois",
        ResolutionTypesEnum.RESTRICTION,
        Periodicity.Mensuelle,
        Category.Alimentation,
        Priority.Moyenne,
        new Date(),
        1,
        0,
        0),

        new Resolution("Faire tous mes devoirs 2 jours à l'avance",
        ResolutionTypesEnum.PERMANENT,
        null,
        Category.Travail,
        Priority.Moyenne,
        null,
        0,
        0,
        0),

        new Resolution("Perdre du poids",
        ResolutionTypesEnum.GOAL,
        null,
        Category.Sante,
        Priority.Forte,
        new Date,
        70,
        90,
        80),

        new Resolution("Faire du sport tous les jours",
        ResolutionTypesEnum.NB_ACTIONS,
        Periodicity.Quotidienne,
        Category.Sport,
        Priority.Forte,
        new Date(),
        1,
        0,
        0)
        
    ]
  }

  async getResolutions():Promise<Resolution[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.resolutions);
    })
  }
}
