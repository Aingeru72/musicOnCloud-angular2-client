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
  nuevaCancion: string;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent.constructor()');
    // Inicializar los atributos de Clase
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1, '');
    this.nuevaCancion = '';

    // Canciones hardcodeadas
    // this.mockData();
  }

  ngOnInit() {
    console.log('CancionesComponent.ngOnInit()');
    // Llamadas a los servicios (providers)
    this.cargarCanciones();
  }

  /**
   * Cargar todas las canciones mediante el provider cancionesService
   */
  cargarCanciones(): void {
    console.log('CancionesComponent.cargarCanciones()');
    // Reset de la lista de canciones
    this.canciones = [];
    this.cancionesService.getAll().subscribe(
      resultado => {
        // tslint:disable-next-line:no-console
        console.debug('peticion correcta %o', resultado);
        this.mapeo(resultado);
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  eliminar( id: number ) {
    console.log(`CancionesComponent eliminar ${id}`);
  }

  /**
   * Mapea los datos recibidos del provider en formato JSON a una lista de canciones
   * @param result resultado de la petición (request)
   */
  mapeo( result: any ) {
    let cancion: Cancion;

    // Parsear elementos recibidos
    result.forEach(element => {
      cancion = new Cancion(element.title);
      cancion.id = element.id;
      cancion.nombre = element.nombre;

      // Rellenar la lista con el nuevo elemento
      this.canciones.push(cancion);
    });

  }

  // mockData(): void {
  //   this.canciones.push(new Cancion(1, 'Macarena'));
  //   this.canciones.push(new Cancion(2, 'Asereje'));
  //   this.canciones.push(new Cancion(3, 'Paquito Chocolatero'));
  //   this.canciones.push(new Cancion(4, 'BOOOOOMBA'));
  //   this.canciones.push(new Cancion(5, 'Mayonesa'));
  // }

}
