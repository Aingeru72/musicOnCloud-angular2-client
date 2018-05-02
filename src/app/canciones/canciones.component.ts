import { Component, OnInit } from '@angular/core';
import { CancionesService } from '../providers/canciones.service';
import { Cancion } from '../model/cancion';
// Variables para usar jQuery
declare var jQuery: any;
declare var $: any;

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
  isValid: boolean;

  constructor(private cancionesService: CancionesService) {
    console.log('CancionesComponent.constructor()');
    // Inicializar los atributos de Clase
    this.canciones = [];
    this.cancionSeleccionada = new Cancion(-1, '');
    this.nuevaCancion = '';
    this.isValid = false;

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
        if (resultado != null) {
          this.mapeo(resultado);
        }
      },
      error => {
        console.warn('peticion incorrecta %o', error);
      }
    );
  }

  /**
   * Inserta nueva canción en la BD, sólo si el título de la canción no es vacio
   */
  insertar() {
    console.log(`CancionesComponent.insertar( ${this.nuevaCancion} )`);

    if (this.nuevaCancion.trim() === '') {
      // tslint:disable-next-line:no-console
      console.warn('No puede añadir una nueva canción con título vacio');
      this.isValid = true;
    } else {
      this.isValid = false;
      this.cancionesService.add(this.nuevaCancion).subscribe(
        resultado => {
          // tslint:disable-next-line:no-console
          console.debug('peticion correcta %o', resultado);
          this.cargarCanciones();
          this.nuevaCancion = '';
        },
        error => {
          console.warn('peticion incorrecta %o', error);
        }
      );
    }
  }

  modificar(index: number) {
    const cancion = this.canciones[index];
    console.log(`CancionesComponent.modificar( ${cancion} )`);

    if (cancion.nombre.trim() === '') {
      alert('No puede dejar un título vacio!');
    } else {
      this.cancionesService.modify(cancion).subscribe(
        resultado => {
          // tslint:disable-next-line:no-console
          console.debug('peticion correcta %o', resultado);
          this.cargarCanciones();
        },
        error => {
          console.warn('peticion incorrecta %o', error);
        }
      );
    }
  }

  /**
   * Elimina una canción a partir de su id
   * @param id : id de la canción a eliminar
   */
  eliminar( id: number ) {
    console.log(`CancionesComponent.eliminar( ${id} )`);

    if ( confirm('¿Está seguro de eliminar la canción?') ) {
      this.cancionesService.delete(id).subscribe(
        resultado => {
          // tslint:disable-next-line:no-console
          console.debug('peticion correcta %o', resultado);
          this.cargarCanciones();
        },
        error => {
          console.warn('peticion incorrecta %o', error);
        }
      );
    }
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

  cerrarAlerta(this) {
    console.log('elemento %o', this);
  }

}
