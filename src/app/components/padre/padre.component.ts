import { Component } from '@angular/core';
import { HijoInputComponent } from '../hijo-input/hijo-input.component';
import { HijoMostrarComponent } from '../hijo-mostrar/hijo-mostrar.component';

@Component({
  selector: 'app-padre',
  standalone: true,
  imports: [HijoInputComponent, HijoMostrarComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.scss',
})
export class PadreComponent {
  informacion: string = 'Input de Nombre';
  tituloApellidos: string = 'Input de Apellido';

  arrayNombres: string[] = [];
  arrayApellidos: string[] = [];

  recibirAgregar($event: string) {
    this.arrayNombres.push($event);
    console.log(this.arrayNombres);
  }

  recibirAgregarApellido($event: string) {
    this.arrayApellidos.push($event);
    console.log(this.arrayApellidos);
  }
}
