import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';


@Component({
  selector: 'app-la-poste',
  templateUrl: './la-poste.page.html',
  styleUrls: ['./la-poste.page.scss'],
})
export class LaPostePage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = '';

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
