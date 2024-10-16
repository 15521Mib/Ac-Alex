import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarCuidadoresPage } from './alterar-cuidadores.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarCuidadoresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarCuidadoresPageRoutingModule {}
