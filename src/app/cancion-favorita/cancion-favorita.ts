import { Component } from '@angular/core';

@Component({
  selector: 'app-cancion-favorita',
  imports: [],
  templateUrl: './cancion-favorita.html',
  styleUrl: './cancion-favorita.css',
})
export class CancionFavorita {
  titulo = 'Tengo Ganas';
  artista = 'Andres Cepeda';
  motivo = 'Me gusta por su melodia, letra y significado, es como una carta de amor.';
  enlace = 'https://open.spotify.com/track/5B4kdHgGPIxzUaa0Fl7OzM?si=kAfzEJ4TT-CObkXtyJx-Wg&utm_source=copy-link&sci=spotify%3Acard-config%3A1Ol4l951UYL8HpERq41uPs';
}
