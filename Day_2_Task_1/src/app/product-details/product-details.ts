import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  // Part 5: Product Details Properties
  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'images/laptop.jpg';
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10;

  increaseQuantity() {
    this.quantity++;
  }

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }
}
