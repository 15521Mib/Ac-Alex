import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlterarPetsPage } from './alterar-pets.page';

const routes: Routes = [
  {
    path: '',
    component: AlterarPetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlterarPetsPageRoutingModule {}
