import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadosService } from '../empleados.service';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css'],
})
export class ProyectosComponentComponent implements OnInit {
  titulo = 'Proyectos';
  cuadroNombre: string;
  cuadroApellido: string;
  cuadroCargo: string;
  cuadroSalario: number;

  constructor(
    private router: Router,
    private miServicio: ServicioEmpleadosService,
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleados = this.empleadosService.empleados;
  }

  volverAHome() {
    this.router.navigate(['']);
  }

  empleados: Empleado[] = [];

  agregarEmpleado() {
    let miEmpleado = new Empleado(
      this.cuadroNombre,
      this.cuadroApellido,
      this.cuadroCargo,
      this.cuadroSalario
    );
    //
    this.empleadosService.agregarEmpleadoServicio(miEmpleado);

    this.router.navigate(['']);
  }
}
