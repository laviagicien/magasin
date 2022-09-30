export class Mondial {
    private id: number;
    private nb:string
    private name: string; 
    private casier: string;

    constructor (id: number,nb:string, name: string, casier: string) {
        this.id = id;
        this.nb = nb;
        this.name = name;
        this.casier = casier;
    }

    getId (){
        return this.id;
    }
    getNb () {
        return this.nb
    }
    getName (){
        return this.name;
    }
    getCasier (){
        return this.casier;
    }

    
}