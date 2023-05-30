import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { ComandaService } from './comanda.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  create(item: Item) {
    throw new Error('Method not implemented.');
  }

  items: ComandaService[] = [];
  constructor() { }
  
  cartSubject: any;

  addToCart(product:ComandaService) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
}
