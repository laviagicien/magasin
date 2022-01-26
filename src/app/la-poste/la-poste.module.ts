import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from '../components.module';

import { IonicModule } from '@ionic/angular';

import { LaPostePageRoutingModule } from './la-poste-routing.module';

import { LaPostePage } from './la-poste.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaPostePageRoutingModule,
    ComponentsModule
  ],
  declarations: [LaPostePage]
})
export class LaPostePageModule {}
