export class Poste {
    private id: number;
    private nb: string;
    private name: string; 
    private date: string;

    constructor (id: number, nb: string, name: string, date: string) {
        this.id = id;
        this.nb = nb;
        this.name = name;
        this.date = date;
    }

    getId (){
        return this.id
    }

    getNb (){
        return this.nb;
    }
    getName (){
        return this.name;
    }
    getDate (){
        return this.date;
    }

    
}
