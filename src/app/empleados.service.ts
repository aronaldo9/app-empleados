import { Empleado } from './empleado.model';

export class EmpleadosService {
  empleados: Empleado[] = [
    new Empleado('Juan', 'Pérez', 'Desarrollador', 50000),
    new Empleado('Ana', 'Gómez', 'Diseñadora', 60000),
    new Empleado('Luis', 'Martínez', 'Gerente', 80000),
    new Empleado('María', 'López', 'Analista', 70000),
  ];

  agregarEmpleadoServicio(empleado: Empleado) {
    this.empleados.push(empleado);
  }
}
