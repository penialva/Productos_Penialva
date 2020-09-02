import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { ProductoService } from '../services/producto.service';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private productos;
  private cantidad=0;

  constructor(private prodSrv:ProductoService, private carritoSrv:CarritoService) {
    this.productos = prodSrv.obtenerTodos();
    this.cantidad = carritoSrv.cantidad();
  }

}
