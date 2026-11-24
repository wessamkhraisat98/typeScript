import { Component } from '@angular/core';

type Product = {
  name: string;
  desc: string;
  price: number;
  image: string;
  isAvi: boolean;
};

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products: Product[] = [
    {
      name: 'Laptop',
      desc: 'High-performance laptop',
      price: 750,
      image: 'images/laptop.jpg',
      isAvi: true,
    },
    {
      name: 'Smartphone',
      desc: 'Latest smartphone',
      price: 450,
      image: 'images/smartphone.jpg',
      isAvi: true,
    },
    {
      name: 'Headphones',
      desc: 'Wireless headphones',
      price: 80,
      image: 'images/headphones.jpg',
      isAvi: true,
    },
    {
      name: 'Smart Watch',
      desc: 'Smart fitness watch',
      price: 120,
      image: 'images/smartwatch.jpg',
      isAvi: true,
    },
    {
      name: 'Keyboard',
      desc: 'Mechanical keyboard',
      price: 45,
      image: 'images/keyboard.jpg',
      isAvi: false,
    },
  ];

  buyNow(productName: string) {
    alert('You selected to buy: ' + productName);
  }
}
