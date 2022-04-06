import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'la-poste',
    pathMatch: 'full'
  },
  {
    path: 'la-poste',
    loadChildren: () => import('./la-poste/la-poste.module').then( m => m.LaPostePageModule)
  },
  {
    path: 'mondial-relay',
    loadChildren: () => import('./mondial-relay/mondial-relay.module').then( m => m.MondialRelayPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
