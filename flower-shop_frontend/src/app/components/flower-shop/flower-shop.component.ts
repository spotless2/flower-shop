import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  productName: string;
  productDetails: string;
  productPrice: number;
  productPhoto: string;
}

@Component({
  selector: 'app-flower-shop',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './flower-shop.component.html',
  styleUrl: './flower-shop.component.css'
})

export class FlowerShopComponent {

  constructor(private http: HttpClient) { }

  products: Product[];

  private apiUrl = 'http://localhost:8080/products';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  ngOnInit() {

    this.getProducts().subscribe(products => {
      this.products = products;
    });

  }

}
