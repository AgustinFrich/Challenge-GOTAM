import { Injectable, inject } from '@angular/core';
import { Empleado } from '../classes/empleado';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  endpoint: string = 'empleado';
  http = inject(HttpClient);

  constructor() {}

  add(empleado: Empleado) {
    return this.http.post(
      `${environment.API_URL}${environment.API_PORT}/${this.endpoint}`,
      empleado
    );
  }

  getAll(): Observable<Empleado[]> {
    return this.http.get<Empleado[]>(
      `${environment.API_URL}${environment.API_PORT}/${this.endpoint}`
    );
  }

  delete(id: number) {
    return this.http.delete(
      `${environment.API_URL}${environment.API_PORT}/${this.endpoint}/${id}`
    );
  }

  update(empleado: Empleado) {
    return this.http.patch(
      `${environment.API_URL}${environment.API_PORT}/${this.endpoint}/${empleado.id}`,
      empleado
    );
  }
}
