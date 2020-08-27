import { Component } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private productos = [
    {
      "id": 1,
      "nombre": "Celular",
      "precio": 5000,
      "cantidad": 10,
      "imagen": "https://www.sumaelectrohogar.com.ar/5800-large_default/telefono-celular-blu-vivo-55.jpg"
    },
    {
      "id": 2,
      "nombre": "Tablet",
      "precio": 25000,
      "cantidad": 3,
      "imagen": "https://medias.musimundo.com/medias/sys_master/images/images/h1b/h70/10110093754398/00233002-137093-01.jpg"
    },
    {
      "id": 3,
      "nombre": "Notebook",
      "precio": 80000,
      "cantidad": 0,
      "imagen": "https://http2.mlstatic.com/D_NQ_NP_721342-MLA31735212831_082019-V.jpg"
    }
  ];
  constructor() {
    
  }

}
