import { Component, OnInit } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Pets } from '../models/Pets';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public listaPets: Pets[] = []; // Lista para armazenar os pets

  constructor(
    private petService: PetsService, // Injetando o serviço de Pets
    private alertController: AlertController // Injetando o AlertController
  ) {}

  ngOnInit(): void {
    this.buscarPets(); 
  }

  buscarPets(): void {
    this.petService.buscarPets().subscribe((dadosRetorno: any) => {
      // Mapeando os dados retornados e atribuindo à lista de pets
      this.listaPets = dadosRetorno.map((registro: any) => ({
        id: registro.payload.doc.id,
        nome: registro.payload.doc.data()['nome'],
        especie: registro.payload.doc.data()['especie'],
        raça: registro.payload.doc.data()['raça'],
        idade: registro.payload.doc.data()['idade'],
        obs: registro.payload.doc.data()['obs'],
      }));
    });
  }

  async deletarPets(id: string) {
    const alert = await this.alertController.create({
      header: 'Confirma exclusão deste pet?',
      buttons: [
        {
          text: 'Não',
          role: 'cancel',
          handler: () => {
            // Ação cancelada, nada a fazer
          },
        },
        {
          text: 'Sim',
          role: 'confirm',
          handler: () => {
            this.petService.deletar(id).then(() => {
              this.buscarPets(); // Atualizando a lista após exclusão
            });
          },
        },
      ],
    });
    await alert.present();
  }

  

}
