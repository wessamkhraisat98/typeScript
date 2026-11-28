import { Component, signal, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  // Part 2 & 3: Product Details Properties (@Input)
  @Input() productName: string = 'Laptop';
  @Input() productDescription: string = 'Dell Laptop, Core i7, 16GB RAM';
  @Input() productPrice: number = 850;
  @Input() isAvailable: boolean = true;

  @Output() data = new EventEmitter<{ name: string; quantity: number }>();

  sendData() {
    this.data.emit({
      name: this.productName,
      quantity: this.quantity(),
    });
  }

  productImage: string = 'images/laptop.jpg';
  discountPercentage: number = 10;

  quantity = signal(1);

  increaseQuantity() {
    this.quantity.update(v => v + 1);
  }

  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update(v => v - 1);
    }
  }
}
