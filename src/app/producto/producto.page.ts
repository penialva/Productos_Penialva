import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductoService } from '../services/producto.service';
import { CarritoService } from '../services/carrito.service';
import { Producto } from '../model/producto';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
  
  private producto:Producto;
  constructor(private activateRoute: ActivatedRoute,
    private prodSrv: ProductoService, private carritoSrv:CarritoService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(paramMap => {
      this.producto = this.prodSrv.obtenerPorId(paramMap.get("id"));

    });
  }

  public addCart() {
    this.carritoSrv.agregar(this.producto);
  };

}
