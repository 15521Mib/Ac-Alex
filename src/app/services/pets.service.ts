import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Pets } from '../models/Pets'; // Faz a importação da classe de entidade Pets

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private afs: AngularFirestore) { }

  // Método para salvar novos pets no Firebase
  // Recebe uma instância da Classe Pets
  salvar(pet: Pets) {
    // Considere a collection como uma espécie de tabela pets
    // Método add recebe o objeto que será salvo.
    return this.afs.collection('pets').add({ ...pet });
  }

  // Busca todos os pets armazenados
  buscarPets() {
    return this.afs.collection('pets').snapshotChanges();
  }

  // Busca um pet através do seu ID
  buscarPorId(id: string) {
    // Método doc() faz referência a apenas um documento (registro) do banco.
    return this.afs.collection('pets').doc(id).valueChanges();
  }

  // Altera um registro do banco
  alterar(pet: Pets) {
    return this.afs.collection('pets').doc(pet.id).update({ ...pet });
  }

  // Deleta um registro do banco
  deletar(id: string) {
    return this.afs.doc('pets/' + id).delete();
  }
}
