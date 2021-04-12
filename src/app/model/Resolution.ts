import { Category } from "./Category";
import { Periodicity } from "./Periodicity";
import { Priority } from "./Priority";
import { ResolutionTypesEnum } from "./ResolutionTypesEnum";

export class Resolution{
    nom: string;
    notes: string;
    type: ResolutionTypesEnum;
    periodicite: Periodicity;
    categorie: Category;
    priorite: Priority;
    dateDebut: Date;
    image: string;
    categorieString: string;
    periodiciteString: string;
    progression: {
        objectif: number,
        initial: number,
        actuel: number,
        unite: string
    }

    constructor(nom: string,
                notes: string,
                type: ResolutionTypesEnum,
                periodicite: Periodicity,
                categorie: Category,
                priorite: Priority,
                dateDebut: Date,
                objectif: number,
                initial: number,
                actuel: number,
                unite: string
                ){
        this.nom = nom;
        this.notes = notes;
        this.type = type;
        this.periodicite = periodicite;
        this.categorie = categorie;
        this.priorite = priorite;
        this.dateDebut = dateDebut;
        this.categorieString = Category[this.categorie];
        this.periodiciteString = Periodicity[this.periodicite]
        this.progression = {
            objectif: objectif,
            initial: initial,
            actuel: actuel,
            unite: unite
        }
        this.image = "assets/images/" + this.categorieString + ".jpg"
    }

    get progress() {
        let progress;
        if(this.progression.initial <= this.progression.objectif) {
            let rel_prog = this.progression.actuel - this.progression.initial;
            let rel_obj = this.progression.objectif - this.progression.initial;
            progress = rel_prog / rel_obj;
        } else {
            let rel_prog = this.progression.actuel - this.progression.objectif;
            let rel_init = this.progression.initial - this.progression.objectif;
            progress = 1 - (rel_prog / rel_init);
        }
        return progress;
     }

}