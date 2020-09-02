import { Injectable } from '@angular/core';
import { Producto } from '../model/producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private carrito: Array<Producto> = [];

  constructor() { }

  public agregar(prod: Producto) {
    this.carrito.push(prod);
  }

  public cantidad() {
    return this.carrito.length;
  }
}
