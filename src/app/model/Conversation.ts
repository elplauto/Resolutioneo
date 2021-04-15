export class Conversation {
    nom: string;
    image: string;
    lastMsg: {
        date: Date,
        preview: string
    }
    nbNotifs: number;

     constructor(nom: string, image: string, lastMsgDate: Date, lastMsgPreview: string, nbNotifs: number) {
         this.nom = nom;
         this.image = image;
         this.lastMsg =  {
             date: lastMsgDate,
             preview: lastMsgPreview
         }
         this.nbNotifs = nbNotifs
     }
}