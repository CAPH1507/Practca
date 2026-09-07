import { Injectable } from '@angular/core';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private items: Item[] = [
    { id: 1,
     titulo: 'Elemento 1', 
     imagen: 'https://placehold.co/300x300', 
     descripcionCorta: 'Texto corto del elemento 1', 
     descripcion1: 'Texto', 
     descripcion2: 'Texto.' },

    { id: 2, 
      titulo: 'Elemento 2', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' },

    { id: 3, 
      titulo: 'Elemento 3', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' },

    { id: 4, 
      titulo: 'Elemento 4', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' },

    { id:5, 
      titulo: 'Elemento 5', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' },

    { id: 6, 
      titulo: 'Elemento 6', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' },

    { id: 7, 
    titulo: 'NO MANS SKY', 
    imagen: 'https://placehold.co/300x300', 
    descripcionCorta: 'Texto corto del elemento 8', 
    descripcion1: 'Aquí va la primera descripción detallada del elemento 8.', 
    descripcion2: 'Aquí va la segunda descripción detallada del elemento 8.' },

    { id: 8, 
    titulo: 'Elemento 8', 
    imagen: 'https://placehold.co/300x300', 
    descripcionCorta: 'Texto corto del elemento 8', 
    descripcion1: 'Aquí va la primera descripción detallada del elemento 8.', 
    descripcion2: 'Aquí va la segunda descripción detallada del elemento 8.' },

    { id: 9, 
      titulo: 'Elemento 9', 
      imagen: 'https://placehold.co/300x300', 
      descripcionCorta: 'Texto', 
      descripcion1: 'Texto', 
      descripcion2: 'Texto' }
    
    ];

  getItems(): Item[] {
    return this.items;
  }

  getItemById(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }
}
