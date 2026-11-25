import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  // Part 2: Header Component
  storeName: string = 'ElectroShop';
  welcomeMessage: string = 'Welcome to ElectroShop!';
  storeSlogan: string = 'Everything You Need in One Place';
  storeAddress: string = 'Amman, Jordan';
  totalProducts: number = 12;
  isStoreOpen: boolean = true;
  currency: string = 'USD';
  storeStatus: string = '';

  constructor() {
    if (this.isStoreOpen) {
      this.storeStatus = 'We Are Open';
    } else {
      this.storeStatus = 'We Are Closed';
    }
  }
}