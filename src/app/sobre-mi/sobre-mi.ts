import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mi',
  imports: [],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.css',
})
export class SobreMi {
  foto = 'Perfil.png';
  descripcionFoto = 'Foto de perfil';
  resumen = 'Estudiante de Ingeniería de Sistemas en UNIPAZ. Me gusta el desarrollo web.';
  detalle = 'Actualmente aprendo Angular y Spring Boot. En mi tiempo libre juego en el celular y escucho música.';
  mostrarDetalle = false;

  alternarDetalle() {
    this.mostrarDetalle = !this.mostrarDetalle;
  }
}
