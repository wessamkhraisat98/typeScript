import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shpoping-cart',
  standalone: false,
  styleUrl: './shpoping-cart.css',
  templateUrl: './shpoping-cart.html',
})
export class ShpopingCart {
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() quantity: number = 0;
}
