import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { faker } from '@faker-js/faker';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  static CATALOG: Product[] = [];

  constructor() {
    for (let i = 0; i < 100; i++) {
      CatalogService.CATALOG.push({
        id: i.toString(),
        userId: faker.number.int({ min: 1, max: 49 }).toString(),
        userName: faker.name.firstName() + ' ' + faker.name.lastName(),
        name: `Product ${i}`,
        price: +(Math.random() * 1000).toFixed(2),
        location: 'Paris',
        description: `Description of product ${i}`,
        image: `https://picsum.photos/seed/${i}/200/300`,
        postedAt: '2011-10-05T14:48:00.000Z',
        sold: false,
      });
    }
  }

  getProducts() {
    return of(CatalogService.CATALOG);
  }

  getProductById(id: string) {
    return of(CatalogService.CATALOG.find(product => product.id === id))
  }

  buyProduct(id: string) {
    const product = CatalogService.CATALOG.find(product => product.id === id);
    if (product) {
      product.sold = true;
      product.soldAt = new Date().toISOString();
      product.buyerId = '1';
    }
    return of(product);
  }

  getUserItems(userId: string) {
    return of(CatalogService.CATALOG.filter(product => product.userId === userId));
  }

  deleteItem(id: string) {
    CatalogService.CATALOG = CatalogService.CATALOG.filter(product => product.id !== id);
  }

  getUserPurchases(userId: string) {
    return of(CatalogService.CATALOG.filter(product => product.buyerId === userId));
  }
}

export interface Product {
  id: string;
  userId: string;
  userName: string;
  name: string;
  price: number;
  location: string;
  description: string;
  image: string;
  postedAt: string;
  sold: boolean;
  buyerId?: string;
  soldAt?: string;
}
