import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Area } from '../classes/area';

@Injectable({
  providedIn: 'root',
})
export class AreaService {
  endpoint: string = 'area';
  http = inject(HttpClient);

  constructor() {}

  add(area: Area) {
    return this.http.post(
      `${environment.API_URL}:${environment.API_PORT}/${this.endpoint}`,
      area
    );
  }

  getAll(): Observable<Area[]> {
    return this.http.get<Area[]>(
      `${environment.API_URL}:${environment.API_PORT}/${this.endpoint}`
    );
  }

  delete(id: number) {
    return this.http.delete(
      `${environment.API_URL}:${environment.API_PORT}/${this.endpoint}/${id}`
    );
  }

  update(area: Area) {
    return this.http.patch(
      `${environment.API_URL}:${environment.API_PORT}/${this.endpoint}/${area.id}`,
      area
    );
  }
}
