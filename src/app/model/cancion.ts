export class Cancion {
    // Variables de Clase
    private _id: number;
    private _nombre: string;

    // Constructor
    constructor( id: number = -1, nombre: string = '') {
        console.log('Cancion.constructor()');
        this._id = id;
        this._nombre = nombre;
    }

    // Getters & Setters
    get id() {
        console.log('Cancion.getId()');
        return this._id;
    }

    set id(id: number) {
        console.log('Cancion.setId(id)');
        this._id = id;
    }

    get nombre() {
        console.log('Cancion.getNombre()');
        return this._nombre;
    }

    set nombre(nombre: string) {
        console.log('Cancion.setNombre(nombre)');
        this._nombre = nombre;
    }
}
