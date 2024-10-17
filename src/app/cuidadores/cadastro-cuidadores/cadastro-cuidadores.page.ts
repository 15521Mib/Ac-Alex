import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { Cuidadores } from 'src/app/models/Cuidadores';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-cuidadores',
  templateUrl: './cadastro-cuidadores.page.html',
  styleUrls: ['./cadastro-cuidadores.page.scss'],
})
export class CadastroCuidadoresPage {

  cuidador: Cuidadores = new Cuidadores();

  constructor(private cdService: CuidadoresService, private route : Router) { }



  salvar(){
    this.cdService.salvar(this.cuidador);
    this.route.navigateByUrl('/');
  }

}
