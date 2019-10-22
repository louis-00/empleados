import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado = new EmpleadoModel();

  constructor(private empleadosService:EmpleadosService) { }

  ngOnInit() {
  }

  save(form:NgForm){

    if (form.invalid) {
      console.log('Formulario no valido');
      
      return
    }

    this.empleadosService.crearEm(this.empleado).subscribe(resp => console.log(resp)
    )
    
  }

}
