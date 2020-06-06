export class ToDo {

    id: number;
    titel: string;
    description: string;
    done: boolean;
        
   constructor(id: number, titel: string, description: string ,done: boolean) {
   //  console.log(titel);
      this.id = id;
      this.titel = titel;
      this.description = description;
      this.done = done;
     }
   
   }