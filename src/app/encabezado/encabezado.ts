import { Component } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  imports: [],
  templateUrl: './encabezado.html',
  styleUrl: './encabezado.css',
})
export class Encabezado {
  nombre = 'Juan Sebastian Pacheco';
  carrera = 'Ingeniería Informatica';
  semestre = 2;
  ciudad = 'Barrancabermeja';
}
