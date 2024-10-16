import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlterarPetsPageRoutingModule } from './alterar-pets-routing.module';

import { AlterarPetsPage } from './alterar-pets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlterarPetsPageRoutingModule
  ],
  declarations: [AlterarPetsPage]
})
export class AlterarPetsPageModule {}
