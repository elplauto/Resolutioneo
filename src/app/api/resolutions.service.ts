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
        "Notes",
        ResolutionTypesEnum.NB_ACTIONS,
        Periodicity.Hebdomadaire,
        Category.Sport,
        Priority.Forte,
        new Date(),
        3,
        0,
        2,
        "fois"),

      new Resolution("Se limiter à un fastfood par mois",
        "Notes",
        ResolutionTypesEnum.RESTRICTION,
        Periodicity.Mensuelle,
        Category.Alimentation,
        Priority.Moyenne,
        new Date(),
        1,
        0,
        0,
        "fois"),

        new Resolution("Faire tous mes devoirs 2 jours à l'avance",
        "Notes",
        ResolutionTypesEnum.PERMANENT,
        null,
        Category.Travail,
        Priority.Moyenne,
        null,
        0,
        0,
        0,
        null),

        new Resolution("Perdre du poids",
        "Notes",
        ResolutionTypesEnum.GOAL,
        null,
        Category.Sante,
        Priority.Forte,
        new Date,
        70,
        90,
        80,
        "kg"),

        new Resolution("Faire du sport tous les jours",
        "Notes",
        ResolutionTypesEnum.NB_ACTIONS,
        Periodicity.Quotidienne,
        Category.Sport,
        Priority.Forte,
        new Date(),
        1,
        0,
        0,
        "fois")
        
    ]
  }

  async getResolutions():Promise<Resolution[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.resolutions);
    })
  }
}
