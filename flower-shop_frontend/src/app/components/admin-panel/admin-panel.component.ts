import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

interface Product {
  id: number;
  productName: string;
  productDetails: string;
  productPrice: number;
  productPhoto: string;
}

interface BuyerDetails {
  name: string;
  address: string;
  paymentOption: string;
  buyDate: string;
}    

interface Order {
  id: number;
  productName: string;
  quantity: number;
  price: number;
  buyerDetails: BuyerDetails;
}    

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, FormsModule, HttpClientModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})

export class AdminPanelComponent {
showDetailsOfProduct(product) {
  this.selectedProduct = product;
  this.modalService.open(this.productEditModal, { ariaLabelledBy: 'productEditModalLabel' });
}

  @ViewChild('orderDetailsModal') orderDetailsModal: TemplateRef<any>;
  @ViewChild('productEditModal') productEditModal: TemplateRef<any>;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

  showForm = false;

  products: Product[];
  orders: Order[];

  private productsApiUrl = 'http://localhost:8080/products';
  private ordersApiUrl = 'http://localhost:8080/orders';

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsApiUrl);
  }
  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.ordersApiUrl);
  }

  ngOnInit() {
    this.getProducts().subscribe(products => {
      this.products = products || [];
    });
    
    this.getOrders().subscribe(orders => {
      this.orders = orders || [];
    });
  }

  product = {
    name: '',
    description: '',
    price: '',
    photo: null
  };

  onFileSelected(event) {
    const file = event.target.files[0];
    const label = document.querySelector('.custom-file-label');
    label.textContent = file.name;
  }

  
  selectedOrder = null;
  selectedProduct = null;

  currentPage = 1;
  currentPageOfProduct = 1;
  pageSize = 5;
  pageSizeOfProduct = 5;

  responseMessage = '';
  responseColor = '';


  get currentPageOrders() {
    if (!this.orders) {
        return [];
    }
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.orders.slice(start, end);
}

get currentPageProducts() {
    if (!this.products) {
        return [];
    }
    const start = (this.currentPageOfProduct - 1) * this.pageSizeOfProduct;
    const end = this.currentPageOfProduct * this.pageSizeOfProduct;
    return this.products.slice(start, end);
}
  
  showDetails(order) {
    this.selectedOrder = order;
    this.modalService.open(this.orderDetailsModal, { ariaLabelledBy: 'orderDetailsModalLabel' });
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      this.product.photo = event.target.files[0];
    }
  }

  onProductFileChange(event) {
    if (event.target.files.length > 0) {
      this.selectedProduct.file = event.target.files[0];
    }
  }

  editProduct(productFormValue) {
    const formData = new FormData();
    Object.keys(productFormValue).forEach(key => {
      formData.append(key, productFormValue[key]);
    });
    formData.append('file', this.selectedProduct.file);
    this.http.put(`http://localhost:8080/products/${this.selectedProduct.id}`, formData).subscribe(
      response => {
        this.responseMessage = 'Product updated successfully';
        this.responseColor = 'green';
      },
      error => {
        this.responseMessage = 'There was an error while updating the product: ' + error.message;
        this.responseColor = 'red';
      }
    );
  }

  deleteProduct(product) {
    this.http.delete(`http://localhost:8080/products/${product.id}`).subscribe(
      () => {
        // handle successful delete here, e.g. remove product from list
        window.alert('Product deleted successfully');
      },
      error => {
        // handle error here
        window.alert('There was an error while deleting the product');
      }
    );
  }

  deleteOrder(order) {
    this.http.delete(`http://localhost:8080/orders/${order.id}`).subscribe(
      () => {
        // handle successful delete here, e.g. remove product from list
        window.alert('Order deleted successfully');
      },
      error => {
        // handle error here
        window.alert('There was an error while deleting the order');
      }
    );
  }

  onSubmit(event) {
    event.preventDefault();
    console.log(this.product)

    if (!this.product.name || !this.product.description || !this.product.price || !this.product.photo) {
      alert('All fields are mandatory');
      return;
    }

    const fileField = event.target.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append('productName', this.product.name);
        formData.append('productDetails', this.product.description);
    formData.append('productPrice', this.product.price);
    formData.append('file', fileField.files[0]);

    this.http.post('http://localhost:8080/products', formData).subscribe(
      response => console.log('Product saved successfully'),
      error => console.error('There was an error while saving the product', error)
    );
  }
}
