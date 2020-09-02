import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private productos:Array<Producto> = [
    {
      "id": "1",
      "nombre": "Celular",
      "precio": 5000,
      "cantidad": 10,
      "imagen": "../assets/celular.jpg"
    },
    {
      "id": "2",
      "nombre": "Tablet",
      "precio": 25000,
      "cantidad": 3,
      "imagen": "../assets/tablet.jpg"
    },
    {
      "id": "3",
      "nombre": "Notebook",
      "precio": 80000,
      "cantidad": 0,
      "imagen": "../assets/notebook.jpg"
    }
  ];

  constructor() { };

  public obtenerTodos() {
    return this.productos;
  };

  public obtenerPorId(id: string) {
    for (let prod of this.productos) {
      if (prod.id == id) {
        return prod;    
      }
    }
    
  };

  public agregar(prod: Producto) {
    this.productos.push(prod);
  }

}
