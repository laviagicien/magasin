export class Poste {
    private id: string;
    private name: string; 
    private date: string;

    constructor (id: string, name: string, date: string) {
        this.id = id;
        this.name = name;
        this.date = date;
    }

    getId (){
        return this.id;
    }
    getName (){
        return this.name;
    }
    getDate (){
        return this.date;
    }

    
}
