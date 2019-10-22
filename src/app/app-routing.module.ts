import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from "@angular/router";

import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadoComponent } from "./pages/empleado/empleado.component";

const routes:Routes = [
  {path:'empleados', component: EmpleadosComponent},
  {path:'empleado/:id', component: EmpleadoComponent},
  {path:'**', pathMatch:'full', redirectTo: 'empleados'}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
