import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  laposte = new BehaviorSubject([])
  mondial = new BehaviorSubject([])

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, 
              private sqlite: SQLite, private http: HttpClient) {
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
        casier TEXT)
      `, [])
          .then(()=> { console.log('Table Created')})
          .catch(e=> {console.error(e)});
    }

}
