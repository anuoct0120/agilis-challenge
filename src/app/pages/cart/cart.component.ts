import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { DummyjsonService } from '../../dummyjson.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {

  cart: any[] = [];

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }

  removeItem(index: number): void {
    this.cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }

  checkout(): void {
    // Implement checkout logic
    alert('Proceeding to checkout!');
  }
}


