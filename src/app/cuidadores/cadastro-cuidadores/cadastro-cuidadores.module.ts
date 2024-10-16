import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroCuidadoresPageRoutingModule } from './cadastro-cuidadores-routing.module';

import { CadastroCuidadoresPage } from './cadastro-cuidadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroCuidadoresPageRoutingModule
  ],
  declarations: [CadastroCuidadoresPage]
})
export class CadastroCuidadoresPageModule {}
