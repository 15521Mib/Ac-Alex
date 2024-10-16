import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Cuidadores } from '../models/cuidadores';

@Injectable({
  providedIn: 'root'
})
export class CuidadoresService {

  constructor(private afs: AngularFirestore) { }
}
