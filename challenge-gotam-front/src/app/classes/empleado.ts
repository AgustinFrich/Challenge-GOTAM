import { Area } from './area';

export class Empleado {
  id?: number;
  nombre: string;
  esDesarrollador: boolean;
  fechaDeNacimiento: Date;
  descripcion: string;
  area: Area;

  constructor(
    nombre: string,
    esDesarrollador: boolean,
    fechaDeNacimiento: Date,
    descripcion: string,
    area: Area
  ) {
    this.nombre = nombre;
    this.esDesarrollador = esDesarrollador;
    this.fechaDeNacimiento = fechaDeNacimiento;
    this.descripcion = descripcion;
    this.area = area;
  }
}
