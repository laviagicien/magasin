import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Poste } from '../poste';


@Component({
  selector: 'app-la-poste',
  templateUrl: './la-poste.page.html',
  styleUrls: ['./la-poste.page.scss'],
})
export class LaPostePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = format(parseISO(new Date().toISOString()), 'dd/MM/yyyy', {locale: fr});
  items = [
    new Poste('2C10980296980', 'John Doe', '22/01/2022'),
    new Poste('2C29010980698', 'Jane Smith', '27/03/2022'),
    new Poste('2C10969809802', 'Doctor Who', '23/03/2022'),
  ]

  constructor() { }

  ngOnInit() {
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


}
