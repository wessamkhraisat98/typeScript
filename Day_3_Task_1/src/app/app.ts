import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Part 3: Product Signals
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);

  // Part 4 & 5: Selected Cart Info
  cartProductName = '';
  cartPrice = 0;
  cartQuantity = 0;

  bindData(event: { name: string; quantity: number }) {
    this.cartProductName = event.name;
    this.cartQuantity = event.quantity;
    this.cartPrice = this.productPrice();
  }

  // Part 6: Update Signals for Second Product
  changeProduct() {
    this.productName.set('Wireless Headphones');
    this.productDescription.set('Bluetooth Headphones');
    this.productPrice.set(120);
    this.isAvailable.set(true);
  }
}
