import { Injectable } from '@angular/core';
import { ResolutionType } from '../model/ResolutionType';

@Injectable({
  providedIn: 'root'
})
export class ResolutionTypeService {
  resolutionTypes: ResolutionType[]

  constructor() { 
    this.resolutionTypes = [
      new ResolutionType("Objectif précis", "Se fixer un objectif chiffré à atteindre", "golf", "primary"),
      new ResolutionType("Nombre d'actions", "Effectuer une action un certain nombre de fois sur une période donnée", "sync", "success"),
      new ResolutionType("Restriction", "Limiter une action à un certain nombre de fois sur une période donnée", "close", "danger"),
      new ResolutionType("Permanente", "Inscrire une résolution permanente pour ne pas l'oublier", "lock-closed", "warning")
    ]
  }

  async getResolutionType():Promise<ResolutionType[]> {
    return new Promise( (resolve, reject) => {
      resolve(this.resolutionTypes);
    })
  }
}
