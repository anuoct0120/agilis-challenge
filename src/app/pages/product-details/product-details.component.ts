
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DummyjsonService } from '../../dummyjson.service';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  productDetails: any;

  constructor(private route: ActivatedRoute, private dummyjsonService: DummyjsonService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = +params.get('id')!;
      if (id) {
        this.fetchProductDetails(id);
      }
    });
  }

  fetchProductDetails(id: number) {
    this.dummyjsonService.getProductById(id).subscribe(data => {
      this.productDetails = data;
    });
  }

  // Method to add a product to the cart
  addToCart(product: any) {
    console.log('Product added to cart:', product);
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
  }
}
