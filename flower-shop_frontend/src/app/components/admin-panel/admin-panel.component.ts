import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModal, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'console';
@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, NgbPaginationModule, FormsModule, HttpClientModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css'
})

export class AdminPanelComponent {

  @ViewChild('orderDetailsModal') orderDetailsModal: TemplateRef<any>;

  constructor(private modalService: NgbModal, private http: HttpClient) {}

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

  orders = [
    {
      orderNumber: 1,
      productName: 'Product 1',
      quantity: 2,
      price: 10.99,
      buyerDetails: {
        name: 'John Doe',
        address: '123 Main St',
        paymentOption: 'Credit Card',
        buyDate: '2022-01-01'
      }
    },
    {
      orderNumber: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 5.99,
      buyerDetails: {
        name: 'Jane Doe',
        address: '456 Elm St',
        paymentOption: 'PayPal',
        buyDate: '2022-01-02'
      }
    },
    {
      orderNumber: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 5.99,
      buyerDetails: {
        name: 'Jane Doe',
        address: '456 Elm St',
        paymentOption: 'PayPal',
        buyDate: '2022-01-02'
      }
    },
    {
      orderNumber: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 5.99,
      buyerDetails: {
        name: 'Jane Doe',
        address: '456 Elm St',
        paymentOption: 'PayPal',
        buyDate: '2022-01-02'
      }
    },
    {
      orderNumber: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 5.99,
      buyerDetails: {
        name: 'Jane Doe',
        address: '456 Elm St',
        paymentOption: 'PayPal',
        buyDate: '2022-01-02'
      }
    },
    {
      orderNumber: 2,
      productName: 'Product 2',
      quantity: 1,
      price: 5.99,
      buyerDetails: {
        name: 'Jane Doe',
        address: '456 Elm St',
        paymentOption: 'PayPal',
        buyDate: '2022-01-02'
      }
    },
    // add more orders here
  ];
  
  selectedOrder = null;

  currentPage = 1;
  pageSize = 5;


  get currentPageOrders() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.orders.slice(start, end);
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
