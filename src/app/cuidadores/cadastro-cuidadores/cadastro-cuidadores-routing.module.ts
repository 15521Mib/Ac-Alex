import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroCuidadoresPage } from './cadastro-cuidadores.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroCuidadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroCuidadoresPageRoutingModule {}
