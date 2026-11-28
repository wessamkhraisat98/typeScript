import { Component } from '@angular/core';

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  isAvailable: boolean;
  discount: number;
  image: string;
};

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  // Part 4: Order Status
  orderStatus: string = 'Pending';

  // Part 7: Selected Category ('All Products' | 'Electronics' | 'Accessories')
  selectedCategory: string = 'All Products';

  // Part 1: Products Array (8 products)
  products: Product[] = [
    {
      id: 1,
      name: 'Laptop',
      price: 850,
      category: 'Electronics',
      isAvailable: true,
      discount: 15,
      image: 'images/laptop.jpg',
    },
    {
      id: 2,
      name: 'Smartphone',
      price: 450,
      category: 'Electronics',
      isAvailable: true,
      discount: 0,
      image: 'images/smartphone.jpg',
    },
    {
      id: 3,
      name: 'Headphones',
      price: 120,
      category: 'Accessories',
      isAvailable: false,
      discount: 10,
      image: 'images/headphones.jpg',
    },
    {
      id: 4,
      name: 'Smart Watch',
      price: 180,
      category: 'Accessories',
      isAvailable: true,
      discount: 20,
      image: 'images/smartwatch.jpg',
    },
    {
      id: 5,
      name: 'Tablet',
      price: 300,
      category: 'Electronics',
      isAvailable: false,
      discount: 5,
      image: 'images/tablet.jpg',
    },
    {
      id: 6,
      name: 'Keyboard',
      price: 65,
      category: 'Accessories',
      isAvailable: true,
      discount: 0,
      image: 'images/keyboard.jpg',
    },
    {
      id: 7,
      name: 'Gaming Mouse',
      price: 45,
      category: 'Accessories',
      isAvailable: true,
      discount: 10,
      image: 'images/mouse.jpg',
    },
    {
      id: 8,
      name: 'Monitor',
      price: 220,
      category: 'Electronics',
      isAvailable: false,
      discount: 0,
      image: 'images/monitor.jpg',
    },
  ];

  buyNow(productName: string) {
    alert('You selected to buy: ' + productName);
  }
}
