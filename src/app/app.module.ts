import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoCompHijoComponent } from './empleado-comp-hijo/empleado-comp-hijo.component';
import { CaracteristicasEmpleadoCComponent } from './caracteristicas-empleado-c/caracteristicas-empleado-c.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoCompHijoComponent,
    CaracteristicasEmpleadoCComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
