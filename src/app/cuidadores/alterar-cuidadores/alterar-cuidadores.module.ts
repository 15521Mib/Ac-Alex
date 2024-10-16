import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarCuidadoresPageRoutingModule } from './alterar-cuidadores-routing.module';

import { AlterarCuidadoresPage } from './alterar-cuidadores.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarCuidadoresPageRoutingModule
  ],
  declarations: [AlterarCuidadoresPage]
})
export class AlterarCuidadoresPageModule {}
