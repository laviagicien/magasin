import { Component, OnInit } from '@angular/core';
import { ViewDidEnter } from '@ionic/angular';
import { cpuUsage } from 'process';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-mondial-relay',
  templateUrl: './mondial-relay.page.html',
  styleUrls: ['./mondial-relay.page.scss'],
})
export class MondialRelayPage implements OnInit {
  choices: Array<String> = ['A','B','C','D','E','F','G','H','I','J']
  
  
  

  constructor(private databaseService: DatabaseService) { }

  ngOnInit() {
    const selects = document.querySelector('ion-select');
    selects.interfaceOptions= {cssClass : 'custom-popover'}
  }
}
