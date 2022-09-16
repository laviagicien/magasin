export class Poste {
    private id: string;
    private name: string; 
    private casier: string;

    constructor (id: string, name: string, casier: string) {
        this.id = id;
        this.name = name;
        this.casier = casier;
    }

    getId (){
        return this.id;
    }
    getName (){
        return this.name;
    }
    getCasier (){
        return this.casier;
    }

    
}