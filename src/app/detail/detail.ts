import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item } from '../models/item.model';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.html',
  styleUrl: './detail.css'
})
export class Detail implements OnInit {
  item: Item | undefined;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService
  ) {}

  ngOnInit(): void {
    // Leemos el id que viene en la URL, ejemplo: /detalle/3
    const idTexto = this.route.snapshot.paramMap.get('id');
    const id = Number(idTexto);

    this.item = this.itemService.getItemById(id);
  }
}
