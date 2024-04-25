import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-mostrar',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './hijo-mostrar.component.html',
  styleUrl: './hijo-mostrar.component.scss',
})
export class HijoMostrarComponent {
  @Input() array: string[] = [];

  logged = true;

  nombre = 'Leandro';
}
