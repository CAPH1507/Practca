import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // El item se recibe desde el componente padre (Gallery)
  @Input() item!: Item;
}
