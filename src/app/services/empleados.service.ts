import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmpleadoModel } from '../models/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private url = 'https://fir-project-17b7f.firebaseio.com'

  constructor(private http:HttpClient) { }

  crearEm(empleado:EmpleadoModel){

    return this.http.post(`${this.url}/empleados.json`, empleado)
  }
}


