import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  titulo: string = 'Título de bienvenida';
  texto: string = 'Aquí va un texto de introducción explicando de qué trata la página.';
}
