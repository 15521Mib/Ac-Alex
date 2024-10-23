import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Pets } from '../models/Pets';
import { AlertController } from '@ionic/angular';
import { Cuidadores } from '../models/Cuidadores';
import { CuidadoresService } from '../services/cuidadores.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaPets: Pets[] = []; // Lista que armazenar os pets
  public listaCuidadores: Cuidadores[] = [];

  constructor(
    private petService: PetsService, // Colocando os serviços de Pets
    private cdService: CuidadoresService,
    private alertController: AlertController // Colocando o AlertController
  ) {}

  ngOnInit(): void {
    this.buscarPets();
    this.buscarCuidadores();
  }

  buscarPets(): void {
    this.petService.buscarPets().subscribe((dadosRetorno: any) => {
      // Mapear os dados retornados e atribuir na lista de pets
      this.listaPets = dadosRetorno.map((registro: any) => ({
        id: registro.payload.doc.id,
        nome: registro.payload.doc.data()['nome'],
        especie: registro.payload.doc.data()['especie'],
        raca: registro.payload.doc.data()['raca'],
        idade: registro.payload.doc.data()['idade'],
        obs: registro.payload.doc.data()['obs'],
      }));
    });
  }

  buscarCuidadores(): void {
    this.cdService.buscarCuidadores().subscribe(dadosRetorno => {
      this.listaCuidadores = dadosRetorno.map((registro:any) => (
        {
          id: registro.payload.doc.id,
          nome: registro.payload.doc.data()['nome'],
          telefone: registro.payload.doc.data()['telefone'],
          exp: registro.payload.doc.data()['exp'],
          escp: registro.payload.doc.data()['escp']
        }
      ))
    })
  }

  async deletarPets(id: string) {
    const alert = await this.alertController.create({
      header: 'Certeza de quer excluir, esse pet?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            // Quando a ação é cancelada, nada acontece
          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.petService.deletar(id).then(() => {
              this.buscarPets(); // Atualizar a lista depois de excluir
            });
          },
        },
      ],
    });
    await alert.present();
  }

  async daletarCuidadores(id: string){
    const alert = await this.alertController.create({
      header: 'Certeza de quer excluir, esse cuidador?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {

          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.cdService.deletar(id);
          },
        },
      ],
    });
    await alert.present();
    this.buscarCuidadores();
  }



}
