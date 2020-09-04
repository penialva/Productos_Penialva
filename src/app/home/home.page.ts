import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { CarritoService } from '../services/carrito.service';
import { Producto } from '../model/producto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private productos;
  private carrito: Array<Producto> = [];

  constructor(private prodSrv:ProductoService, private carritoSrv:CarritoService) {
    this.productos = prodSrv.obtenerTodos();
    this.carrito = carritoSrv.verCarrito();
  }

  public costCart() {
    let costo = 0;
    for (var item of this.carrito) {
      costo = costo + item.precio;
    }
    alert("El costo total del carrito es de $ " + costo);
  }

}
