import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';

@Component({
  selector: 'app-canciones',
  templateUrl: './canciones.component.html',
  styleUrls: ['./canciones.component.scss']
})
export class CancionesComponent implements OnInit {

  // Atributos de Clase
  canciones: Cancion[];
  cancionSeleccionada: Cancion;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent.constructor()');
    // Inicializar los atributos de Clase
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1, '');

    // Canciones hardcodeadas
    this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent.ngOnInit()');
    // Llamadas a los servicios (providers)
  }

  eliminar( id: number ) {
    console.log(`CancionesComponent eliminar ${id}`);
  }

  mockData(): void {
    this.canciones.push(new Cancion(1, 'Macarena'));
    this.canciones.push(new Cancion(2, 'Asereje'));
    this.canciones.push(new Cancion(3, 'Paquito Chocolatero'));
    this.canciones.push(new Cancion(4, 'BOOOOOMBA'));
    this.canciones.push(new Cancion(5, 'Mayonesa'));
  }

}
