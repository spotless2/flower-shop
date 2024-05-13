import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';

interface Product {
  id: number;
  productName: string;
  productDetails: string;
  productPrice: number;
  productPhoto: string;
  addedToCart: boolean;
}

@Component({
  selector: 'app-flower-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './flower-shop.component.html',
  styleUrl: './flower-shop.component.css'
})

export class FlowerShopComponent {

  constructor(private http: HttpClient, private cartService: CartService) { }

  products: Product[];

  private apiUrl = 'http://localhost:8080/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  ngOnInit() {
    let cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
  
    this.getProducts().subscribe(products => {
      this.products = products.map(product => {
        product.addedToCart = !!cart.find(p => p.id === product.id);
        return product;
      });
    });
  }
  addToCart(product: any) {
    let cart: any[] = JSON.parse(localStorage.getItem('cart') || '[]');
    let index = cart.findIndex(p => p.id === product.id);
  
    if (index > -1) {
      // Product is in the cart, remove it
      cart.splice(index, 1);
      product.addedToCart = false;
    } else {
      // Product is not in the cart, add it
      cart.push(product);
      product.addedToCart = true;
    }
  
    localStorage.setItem('cart', JSON.stringify(cart));

    this.cartService.changeCartItemCount(cart.length);
  }

}
