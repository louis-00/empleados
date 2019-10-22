import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { EmpleadoModel } from 'src/app/models/empleado.model';
import { EmpleadosService } from 'src/app/services/empleados.service';
import  Swal  from "sweetalert2";
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  empleado = new EmpleadoModel();

  constructor(private empleadosService:EmpleadosService,
              private route:ActivatedRoute) { }

  ngOnInit() {

    const id = this.route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      
      this.empleadosService.getEmpleado(id)
        .subscribe((resp:EmpleadoModel) => {
          this.empleado = resp;
          this.empleado.id = id;
        });
    }
  }

  save(form:NgForm){

    if (form.invalid) {
      console.log('Formulario no valido');
      
      return
    }

    Swal.fire({
      title:'Espere',
      text:'Guardando informacion',
      type:'info',
      allowOutsideClick: false
    });

    Swal.showLoading();

    let peticion:Observable<any>;
    
    if (this.empleado.id) {
      peticion = this.empleadosService.updateEmpleado(this.empleado)
        
    } else {
      peticion = this.empleadosService.crearEm(this.empleado)
        
    }
     
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.empleado.nombre,
        text: 'Se actualizo correctamente',
        type: 'success'
      })
    })
    
    
  }

}
