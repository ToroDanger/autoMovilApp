import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Car{
  id?:string;
  nombre:string;
  patente:string;
  destino:string;
  capacidad:number;
  tarifa:number;
  telefono:number;
}

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private collectionName="cars";
  constructor(private firestore:AngularFirestore) { }

  addCar(car:Car): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.collection(this.collectionName).doc(id).set({...car,id})
  }

  getCar():Observable<Car[]>{
    return this.firestore.collection<Car>(this.collectionName).valueChanges();
  }

  getCarById(id: string): Observable<Car | undefined> {
    return this.firestore
      .collection<Car>(this.collectionName)
      .doc(id)
      .valueChanges();
  }
  
}
