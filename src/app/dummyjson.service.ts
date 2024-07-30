import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Ensures the service is provided globally
})
export class DummyjsonService {
  private baseUrl = 'https://dummyjson.com';

  constructor(private http: HttpClient) {}

  // Login
  authenticate(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/login`, user);
  }

  // Get Users
  getUserById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/users/${id}`);
  }

  // Get Product List
  getProducts(limit: number, skip: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products`);
  }

  // Get Products
  getProductById(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/products/${id}`);
  }

  // Get Cart by User ID
  getCart(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/carts/${id}`);
  }

  // Add Product to Cart
  // addToCart(userId: number, products: { id: number, quantity: number }[]): Observable<any> {
  //   return this.http.post(`${this.baseUrl}/carts/add`, { userId, products });
  // }
  addToCart(id: number, products: { id: number, quantity: number }[]): Observable<any> {
    const url = `${this.baseUrl}/carts/add`;
    const body = {
      id,
      products
    };
    return this.http.post<any>(url, body);
  }
}
