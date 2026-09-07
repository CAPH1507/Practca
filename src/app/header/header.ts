import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [RouterLink, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  textoBusqueda: string = '';

  buscar(): void {
    console.log('Texto ingresado:', this.textoBusqueda);
  }
}
