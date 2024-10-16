import { Component } from '@angular/core';

import { PetsService  } from 'src/app/services/pets.service';
import { Pets } from 'src/app/models/Pets';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cadastro-pets',
  templateUrl: './cadastro-pets.page.html',
  styleUrls: ['./cadastro-pets.page.scss'],
})
export class CadastroPetsPage {

  pet: Pets = new Pets();

  constructor( private PtService: PetsService,
    private route: Router ) { }
   
  

  salvar(){
    this.PtService.salvar(this.pet)
    this.route.navigateByUrl('/')
  }

}
