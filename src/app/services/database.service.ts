import { Injectable } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter';
import { HttpClient } from '@angular/common/http';
import {SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private database: SQLiteObject;
  private databaseReady: BehaviorSubject<Boolean> = new BehaviorSubject(false);

  post = new BehaviorSubject([])

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, 
              private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready().then(() => {
      this.sqlite.create({
        name: 'poste.db', 
        location: 'default'
      })
      .then((db: SQLiteObject) => {
        this.database = db;
        this.seedDatabase();
      })  
    })
   }

   seedDatabase() {
     this.http.get('assets/seed.db')
   }
}
