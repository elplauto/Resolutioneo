export class Friend {
    nom: string;
    points: number;
    lastMsg: {
        date: Date,
        preview: string
    }

     constructor(nom: string, points: number, date: Date, lastMsgPreview: string) {
         this.nom = nom;
         this.points = points;
         this.lastMsg =  {
            date: date,
            preview: lastMsgPreview
        }
     }
}