import { Component, OnInit } from '@angular/core';
import { CuidadoresService } from 'src/app/services/cuidadores.service';
import { Cuidadores } from 'src/app/models/Cuidadores';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-cuidadores',
  templateUrl: './alterar-cuidadores.page.html',
  styleUrls: ['./alterar-cuidadores.page.scss'],
})
export class AlterarCuidadoresPage implements OnInit {

  cuidador: Cuidadores = new Cuidadores();

  constructor(private cdService : CuidadoresService, private route: Router, private rotaAtiva: ActivatedRoute) {
    this.cuidador.id = this.rotaAtiva.snapshot.params['id']
   }

  ngOnInit() {
    this.cdService.buscarPorId(this.cuidador.id).subscribe((dados:any) => {
      this.cuidador.nome = dados['nome'];
      this.cuidador.telefone = dados['telefone'];
      this.cuidador.exp = dados['experiencia'];
      this.cuidador.escp = dados['especialidade']
    })
  }

  salvar(){
    this.cdService.alterar(this.cuidador);
    this.route.navigateByUrl('/')
  }

}
