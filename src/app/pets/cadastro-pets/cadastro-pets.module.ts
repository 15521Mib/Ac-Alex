import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroPetsPageRoutingModule } from './cadastro-pets-routing.module';

import { CadastroPetsPage } from './cadastro-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroPetsPageRoutingModule
  ],
  declarations: [CadastroPetsPage]
})
export class CadastroPetsPageModule {}
