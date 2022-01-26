import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaPostePage } from './la-poste.page';

const routes: Routes = [
  {
    path: '',
    component: LaPostePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaPostePageRoutingModule {}
