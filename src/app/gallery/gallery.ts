import { Component, HostListener, OnInit } from '@angular/core';
import { Card } from './card/card';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-gallery',
  imports: [Card],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css'
})
export class Gallery implements OnInit {
  items: Item[] = [];
  private todosLosItems: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.todosLosItems = this.itemService.getItems();
    this.actualizarItemsVisibles();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.actualizarItemsVisibles();
  }

  private actualizarItemsVisibles(): void {
    const ancho = window.innerWidth;
    let cantidad: number;

    if (ancho >= 1200) {
      cantidad = 6;
    } else if (ancho >= 900) {
      cantidad = 4;
    } else if (ancho >= 600) {
      cantidad = 3;
    } else {
      cantidad = 2;
    }

    this.items = this.todosLosItems.slice(0, cantidad);
  }
}