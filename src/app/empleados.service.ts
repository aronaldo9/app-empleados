import { Injectable } from '@angular/core';
import { Empleado } from './empleado.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';

@Injectable()
export class EmpleadosService {
  constructor(private servicioVentanaEmergente: ServicioEmpleadosService) {}

  empleados: Empleado[] = [
    new Empleado('Juan', 'Pérez', 'Desarrollador', 50000),
    new Empleado('Ana', 'Gómez', 'Diseñadora', 60000),
    new Empleado('Luis', 'Martínez', 'Gerente', 80000),
    new Empleado('María', 'López', 'Analista', 70000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.servicioVentanaEmergente.muestraMensaje(
      'Persona que se va a agregar: ' +
        '\n' +
        empleado.nombre +
        '\n' +
        empleado.salario
    );
    this.empleados.push(empleado);
  }

  encontrarEmpleado(indice: number) {
    let empleado: Empleado = this.empleados[indice];

    return empleado;
  }

  actualizarEmpleado(indice: number, empleado: Empleado) {
    let empleadoModificado = this.empleados[indice];

    empleadoModificado.nombre = empleado.nombre;
    empleadoModificado.apellido = empleado.apellido;
    empleadoModificado.cargo = empleado.cargo;
    empleadoModificado.salario = empleado.salario;
  }

  eliminarEmpleado(indice: number) {
    this.empleados.splice(indice, 1);
  }
}
