export class Group {
    nom: string;
    lastMsg: {
        date: Date,
        preview: string
    }

     constructor(nom: string, date: Date, lastMsgPreview: string) {
         this.nom = nom;
         this.lastMsg =  {
            date: date,
            preview: lastMsgPreview
        }
     }
}