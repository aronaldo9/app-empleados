import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-comp-hijo',
  templateUrl: './empleado-comp-hijo.component.html',
  styleUrls: ['./empleado-comp-hijo.component.css'],
})
export class EmpleadoCompHijoComponent implements OnInit {
  @Input() empleadoDeLista: Empleado;
  @Input() indice: number;

  constructor() {}

  ngOnInit(): void {}

  arrayCaracteristicas = [''];
  agregarCaracteristicas(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }
}
