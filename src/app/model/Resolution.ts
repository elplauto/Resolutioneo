import { Category } from "./Category";
import { Periodicity } from "./Periodicity";
import { Priority } from "./Priority";

export class Resolution {
    nom: string;
    periodicite: Periodicity;
    categorie: Category;
    dateDebut: Date;
    priorite: Priority;
    image: string;
    categorieString: string;
    periodiciteString: string;

    constructor(nom: string, periodicite: Periodicity, categorie: Category, dateDebut: Date,
        priorite: Priority){
        this.nom = nom;
        this.periodicite = periodicite;
        this.categorie = categorie;
        this.dateDebut = dateDebut;
        this.priorite = priorite;
        this.categorieString = Category[this.categorie];
        this.image = "assets/images/" + this.categorieString + ".jpg"
        this.periodiciteString = Periodicity[this.periodicite]
    }


}