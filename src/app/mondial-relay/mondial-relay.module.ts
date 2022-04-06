import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';

import { IonicModule } from '@ionic/angular';

import { MondialRelayPageRoutingModule } from './mondial-relay-routing.module';

import { MondialRelayPage } from './mondial-relay.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MondialRelayPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MondialRelayPage]
})
export class MondialRelayPageModule {}
