import { getLocaleDateFormat } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Poste } from '../poste';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-la-poste',
  templateUrl: './la-poste.page.html',
  styleUrls: ['./la-poste.page.scss'],
})
export class LaPostePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = this.formatDate(new Date().toISOString());
  nameValue = '';
  nbValue = '';
  items: Poste[] = [];

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    this.databaseService.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.databaseService.getLaposte().subscribe(postes => {
          this.items = postes;
        })
      }
    })
  }

  confirm() {
    this.datetime.confirm();
  }
  
  reset() {
    this.datetime.reset()
  }

  formatDate(value: string) {
    return format(parseISO(value), 'dd/MM/yyyy', {locale: fr});
  }

  addDataPoste() {
    if(this.nameValue === '' || this.nbValue === '') {
      alert('Attention, un ou plusieurs champs sont vides')
    } else {
      let sendDate = this.dateValue2.split('/')
      this.databaseService.addPoste(this.nbValue, this.nameValue, new Date(parseInt(sendDate[2]),parseInt(sendDate[1])-1, parseInt(sendDate[0]) ))
    }
  }
  deleteDataPoste(id) {
    this.databaseService.deletePoste(id)
  }



}
