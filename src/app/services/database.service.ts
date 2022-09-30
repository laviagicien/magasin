import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'
import { BehaviorSubject, Observable } from 'rxjs';
import { Poste } from '../poste';
import { Mondial } from '../mondial';



@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  laposte = new BehaviorSubject([])
  mondial = new BehaviorSubject([])

  constructor(private plt: Platform, 
              private sqlite: SQLite) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'postemr.db', 
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.createTable();
      })  
    })
   }

    createTable() {
      this.database.executeSql(`
      CREATE TABLE IF NOT EXISTS LaPoste (
        id INT PRIMARY KEY, 
        nb TEXT, 
        nom TEXT, 
        date DATETIME);
      CREATE TABLE IF NOT EXISTS Mondial (
        id INT PRIMARY KEY, 
        nb TEXT, 
        nom TEXT, 
        casier TEXT);
      INSERT OR IGNORE INTO LaPoste(nb, nom, date) VALUES (
        '2C10980296980', 
        'John Doe', 
        NOW()
      );
      INSERT OR IGNORE INTO Mondial(nb, nom, casier) VALUES (
        '65758415',
        'John Doe',
        'D'
      )
      `, [])
          .then(()=> { 
            this.loadPoste()
            console.log('Table Created')})
          .catch(e=> {console.error(e)});
    }

    getDatabaseState() {
      return this, this.databaseReady.asObservable();
    }

    getLaposte(): Observable<Poste[]> {
      return this.laposte.asObservable();
    }

    getMondial(): Observable<Mondial[]> {
      return this.laposte.asObservable();
    }

    loadPoste() {
      return this.database.executeSql('SELECT * FROM LaPoste', []).then(data =>{
        let laPoste: Poste[];

        if(data.rows.length > 0) {
          for (var i=0; i < data.rows.length; i++) {
            laPoste.push(
              new Poste(data.rows.item[i].id,
                        data.rows.item[i].nb,
                        data.rows.item[i].nom,
                        data.rows.item[i].date
                        ));
          }

          this.laposte.next(laPoste)
        }
      })
    }
    
}
