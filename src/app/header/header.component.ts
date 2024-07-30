import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { DummyjsonService } from '../dummyjson.service';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  cartItemCount: number = 0;

  constructor(private dummyjsonService: DummyjsonService, private router: Router) {}

  ngOnInit(): void {
    this.updateCartItemCount();
  }

  updateCartItemCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    this.cartItemCount = cart.length;
  }

  goToCart() {
    this.router.navigate(['/cart']);
  }

  handleClick(): void {
    // Handle mouse click
  }

  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') { // Enter or Space key
      this.handleClick(); // Trigger the same action as click
    }
  }
}

