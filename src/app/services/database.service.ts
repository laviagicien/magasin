import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'
import { BehaviorSubject, Observable } from 'rxjs';
import { Poste } from '../poste';
import { Mondial } from '../mondial';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';



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
        CREATE TABLE IF NOT EXISTS laposte (
          id INTEGER PRIMARY KEY,
          nb TEXT,
          nom TEXT,
          date DATETIME)
        `, []).then(()=> {
          this.database.executeSql(`
          CREATE TABLE IF NOT EXISTS mondial (
            id INTEGER PRIMARY KEY,
            nb TEXT,
            nom TEXT,
            casier TEXT)
          `, []).then(() => {
                console.log('Table Created');
                this.loadPoste();
                this.loadMondial();
                this.databaseReady.next(true)
              })
          }).catch(e => {console.log(e)})
    }

    getDatabaseState() {
      return this.databaseReady.asObservable();
    }

    getLaposte(): Observable<Poste[]> {
      return this.laposte.asObservable();
    }

    getMondial(): Observable<Mondial[]> {
      return this.mondial.asObservable();
    }

    loadPoste() {
      return this.database.executeSql('SELECT * FROM laposte', []).then(data =>{
        let laPoste: Poste[] = [];

        if(data.rows.length > 0) {
          for (var i=0; i < data.rows.length; i++) {
            laPoste.push(
              new Poste(data.rows.item(i).id,
                        data.rows.item(i).nb,
                        data.rows.item(i).nom,
                        data.rows.item(i).date
                        ));
          }

          this.laposte.next(laPoste)
        } else { 
        console.log ('database empty') 
          this.laposte.next(laPoste)
      }
      })
    }

    loadMondial() {
      return this.database.executeSql('SELECT * FROM mondial', []).then(data =>{
        let mondial: Mondial[] = [];

        if(data.rows.length > 0) {
          for (var i=0; i < data.rows.length; i++) {
            mondial.push(
              new Mondial(data.rows.item(i).id,
                        data.rows.item(i).nb,
                        data.rows.item(i).nom,
                        data.rows.item(i).casier
                        ));
          }
          this.mondial.next(mondial);
        } else { 
          console.log ('database empty');
          this.mondial.next(mondial)
        }
      })

    }

    addPoste(nb: string, nom: string, date: Date) {
      let data = [nb, nom, date.toISOString()];
      return this.database.executeSql(`
      INSERT INTO laposte (nb, nom, date) VALUES (?, ?, ?)
      `, data).then(() => {
        this.loadPoste();
      });
    }

    deletePoste(id) {
      return this.database.executeSql(`
      DELETE FROM laposte WHERE id = ?
      `, [id]).then(()=>{
        this.loadPoste();
      })
    }

    addMondial(nb:string, nom:string, casier:string) {
      let data = [nb, nom, casier]
      return this.database.executeSql(`
      INSERT INTO mondial (nb, nom, casier) VALUES (?, ?, ?)
      `, data).then(()=>
      this.loadMondial())
    }

    deleteMondial(id) {
      return this.database.executeSql(`
      DELETE FROM mondial WHERE id = ?
      `, [id]).then(()=>{
        this.loadMondial();
      })
    }
    
}
