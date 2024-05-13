import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItemCount = new BehaviorSubject(0);

  currentCartItemCount = this.cartItemCount.asObservable();

  constructor() { }

  changeCartItemCount(count: number) {
    this.cartItemCount.next(count);
  }
}
