import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Part 2: Store Information
  storeName: string = 'ElectroShop';
  storeDescription: string = 'Your favorite electronics store';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'USD';

  // Part 3: Products Information
  productNames: string[] = [
    'Laptop',
    'Smartphone',
    'Headphones',
    'Smart Watch',
    'Keyboard',
  ];
  productPrices: number[] = [750, 450, 80, 120, 45];
  featuredProduct = {
    name: 'Laptop',
    price: 750,
    description: 'High-performance laptop',
  };

  // Part 4: Store Status
  storeStatus: string = '';

  // Part 5: Product Price Information
  discountPercentage: number = 10;
  finalPrice: number = 0;

  // Part 6: Store Summary
  totalProductsCount: number = 0;
  highestPrice: number = 0;
  lowestPrice: number = 0;
  totalProductsValue: number = 0;

  constructor() {
    // Part 4: Store status condition
    if (this.isStoreOpen) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }

    // Part 5: Discount calculation condition
    if (this.discountPercentage > 0) {
      this.finalPrice =
        this.featuredProduct.price -
        (this.featuredProduct.price * this.discountPercentage) / 100;
    } else {
      this.finalPrice = this.featuredProduct.price;
    }

    // Part 6: Store summary loop and conditions
    if (this.productPrices.length > 0) {
      this.highestPrice = this.productPrices[0];
      this.lowestPrice = this.productPrices[0];

      for (let i = 0; i < this.productPrices.length; i++) {
        this.totalProductsCount++;
        this.totalProductsValue += this.productPrices[i];

        if (this.productPrices[i] > this.highestPrice) {
          this.highestPrice = this.productPrices[i];
        }

        if (this.productPrices[i] < this.lowestPrice) {
          this.lowestPrice = this.productPrices[i];
        }
      }
    }
  }
}
