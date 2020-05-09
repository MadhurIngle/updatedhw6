import { Injectable } from '@angular/core'
import { Product } from './product.model'
import { Observable, from } from 'rxjs'
import { Order } from './order.model'

@Injectable()
export class StaticDataSource {
  private products: any = [
    new Product(3, 'Football Shoes', 'Football', 'Football Shoes (Football)', 120),
    new Product(5, 'Swimming Goggles', 'Swimming', 'Swimming Goggles (Swimming)', 10),
    new Product(6, 'Swimming Costume', 'Swimming', 'Swimming Costume (Swimming)', 30),
    new Product(7, 'Ouija Board', 'Chess', 'Chess Board (Category 2)', 20),
    new Product(8, 'Chess Board', 'Chess', 'Chess Warriors (Indoor Games)', 5),
  ]

  getProducts(): Observable<Product[]> {
    return from([this.products])
  }

  saveOrder(order: Order): Observable<Order> {
    console.log(JSON.stringify(order))
    return from([order])
  }
}
