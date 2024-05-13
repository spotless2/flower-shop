import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCollapseModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { CartService } from '../../services/cart.service';

declare function burgerMenu(): void;

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet, NgbModule, CommonModule, CollapseModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  isCollapsed = false;

  toggleCollapse() {
    burgerMenu();
  }

  ngOnInit() {
    this.cartService.currentCartItemCount.subscribe(count => this.cartItemCount = count);
  }

  get total() {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
  proceedToCheckout() {
    // Implement your checkout logic here
  }

  removeFromCart(item: any) {
    const index = this.cart.findIndex(i => i.name === item.name && i.price === item.price);
    
    if (index > -1) {
      this.cart.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      this.updateCartItemCount();
    }
  }

  cartItemCount = 0;


  cart = JSON.parse(localStorage.getItem('cart') || '[]').map((item: any) => ({ name: item.productName, price: item.productPrice }));

  constructor(private modalService: NgbModal, private cartService: CartService) {
    this.updateCartItemCount();
  }

  openFavorites(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-favorites' });
  }
  openCart(content: any) {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]').map((item: any) => ({ name: item.productName, price: item.productPrice }));
    this.modalService.open(content, { ariaLabelledBy: 'modal-cart' });
  }

  updateCartItemCount() {
    this.cartItemCount = this.cart.length;
}


}
