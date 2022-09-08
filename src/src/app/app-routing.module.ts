import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'card',
    loadChildren: () => import('./pages/card/card.module').then( m => m.CardPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule)
  },
  {
    path: 'usuario1',
    loadChildren: () => import('./pages/usuario1/usuario1.module').then( m => m.Usuario1PageModule)
  },
  {
    path: 'auto1',
    loadChildren: () => import('./pages/auto1/auto1.module').then( m => m.Auto1PageModule)
  },
  {
    path: 'viaje1',
    loadChildren: () => import('./pages/viaje1/viaje1.module').then( m => m.Viaje1PageModule)
  },
  {
    path: 'viaje2',
    loadChildren: () => import('./pages/viaje2/viaje2.module').then( m => m.Viaje2PageModule)
  },
  {
    path: 'auto2',
    loadChildren: () => import('./pages/auto2/auto2.module').then( m => m.Auto2PageModule)
  },
  {
    path: 'informacion',
    loadChildren: () => import('./pages/informacion/informacion.module').then( m => m.InformacionPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
