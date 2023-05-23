import { Component } from '@angular/core';
import { CatalogService } from "../../services/catalog.service";
import { ViewingMode } from "../../shared/list-item/list-item.component";

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orders = this.catalogService.getUserPurchases('1');
  constructor(private catalogService: CatalogService) {}

  protected readonly ViewingMode = ViewingMode;
}
