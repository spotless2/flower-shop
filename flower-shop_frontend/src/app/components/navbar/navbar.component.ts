import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbCollapseModule, NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap/collapse';

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

  
  favorites = [
    { name: 'Item1' },
    { name: 'Item2' },
    { name: 'Item3' }
  ];

  cart = [
    { name: 'cart1' },
    { name: 'cart1' },
    { name: 'cart2' }
  ];

  constructor(private modalService: NgbModal) {}

  openFavorites(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-favorites' });
  }
  openCart(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-cart' });
  }


}
