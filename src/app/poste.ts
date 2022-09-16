export class Poste {
    private nb: string;
    private name: string; 
    private date: string;

    constructor (nb: string, name: string, date: string) {
        this.nb = nb;
        this.name = name;
        this.date = date;
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
