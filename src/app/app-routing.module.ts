import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pets/cadastro-pets',
    loadChildren: () => import('./pets/cadastro-pets/cadastro-pets.module').then( m => m.CadastroPetsPageModule)
  },
  {
    path: 'pets/alterar-pets/:id',
    loadChildren: () => import('./pets/alterar-pets/alterar-pets.module').then( m => m.AlterarPetsPageModule)
  },
  {
    path: 'cuidadores/cadastro-cuidadores',
    loadChildren: () => import('./cuidadores/cadastro-cuidadores/cadastro-cuidadores.module').then( m => m.CadastroCuidadoresPageModule)
  },
  {
    path: 'cuidadores/alterar-cuidadores/:id',
    loadChildren: () => import('./cuidadores/alterar-cuidadores/alterar-cuidadores.module').then( m => m.AlterarCuidadoresPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
