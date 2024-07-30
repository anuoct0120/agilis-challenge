import { Component, OnInit, ViewChild } from '@angular/core';
import { DummyjsonService } from '../../dummyjson.service';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../../header/header.component';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderComponent;
  products: any[] = [];
  limit = 10;
  skip = 0;
  total = 0;

  constructor(private dummyjsonService: DummyjsonService, private router: Router) {}

  ngOnInit(): void {
    // Fetch initial products when the component is initialized
    this.fetchProducts();
  }

  // Method to handle infinite scrolling
  onScroll(): void {
    if (this.products.length < this.total) {
      this.skip += this.limit;
      this.dummyjsonService.getProducts(this.limit, this.skip).subscribe(res => {
        this.products = [...this.products, ...res.products];
      });
    }
  }

  // Method to fetch products from the API
  fetchProducts(): void {
    this.dummyjsonService.getProducts(this.limit, this.skip).subscribe(res => {
      this.products = res.products;
      this.total = res.total;
    });
  }

  // Method to navigate to the product details page
  viewProductDetails(productId: number) {
    this.router.navigate(['/product-details', productId]);
  }

  // Method to add a product to the cart
  addToCart(product: any) {
    console.log('Product added to cart:', product);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  // Method to update cart item count in the header component
  onProductAddedToCart() {
    this.headerComponent.updateCartItemCount();
  }

  // Method to generate an array of stars based on product rating
  getStars(rating: number): number[] {
    return Array(Math.round(rating)).fill(0);
  }
}

