import { PetsService } from './../../services/pets.service';
import { Component, OnInit } from '@angular/core';
import { Pets } from 'src/app/models/Pets';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alterar-pets',
  templateUrl: './alterar-pets.page.html',
  styleUrls: ['./alterar-pets.page.scss'],
})
export class AlterarPetsPage implements OnInit {

  pet: Pets = new Pets();

  constructor(
    private ptService: PetsService,
    private route: Router,
    private rotaAtiva: ActivatedRoute

  ) {
    this.pet.id = this.rotaAtiva.snapshot.params['id'];
   }

   ngOnInit() {
    this.ptService.buscarPorId(this.pet.id).subscribe((dados: any) => {
      this.pet.nome = dados['nome'];
      this.pet.especie = dados['especie'];
      this.pet.raca = dados['raca'];
      this.pet.idade = dados['idade'];
      this.pet.obs = dados['obs'];
    });
  }
  salvar(){
    this.ptService.alterar(this.pet)
    this.route.navigateByUrl('/')
  }

}
