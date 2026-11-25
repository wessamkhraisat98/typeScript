import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  // Part 6: Footer Component
  storeName: string = 'ElectroShop';
  storeAddress: string = 'Amman, Jordan';
  contactEmail: string = 'info@electroshop.com';
  copyrightMessage: string = '© 2026 ElectroShop. All rights reserved.';
}
