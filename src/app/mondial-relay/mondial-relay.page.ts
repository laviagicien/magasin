import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { isThursday } from 'date-fns';
import { cpuUsage } from 'process';
import { Mondial } from '../mondial';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-mondial-relay',
  templateUrl: './mondial-relay.page.html',
  styleUrls: ['./mondial-relay.page.scss'],
})
export class MondialRelayPage implements OnInit {
  choices: Array<String> = ['A','B','C','D','E','F','G','H','I','J']
  items: Mondial[] = []
  
  nb ='';
  nom = '';
  casier = '';

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    const selects = document.querySelector('ion-select');
    selects.interfaceOptions= {cssClass : 'custom-popover'}
    this.databaseService.getDatabaseState().subscribe(rdy => {
      if (rdy) {
        this.databaseService.getMondial().subscribe(mondial => {
          this.items = mondial;
        })
      }
    })
  }

  addDataMondial(){
    if(this.nb === '' || this.nom === '' || this.casier === '') {
      alert('Attention, un ou plusieurs champs sont vides')
    } else {
      this.databaseService.addMondial(this.nb, this.nom, this.casier)
    }
  }

  deleteDataMondial(id) {
      this.databaseService.deleteMondial(id)
  }
}
