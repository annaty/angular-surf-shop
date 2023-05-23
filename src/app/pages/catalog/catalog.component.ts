import { Component } from '@angular/core';
import { CatalogService } from "../../services/catalog.service";
import { ViewingMode } from "../../shared/list-item/list-item.component";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  products = this.catalogService.getProducts();
  constructor(private catalogService: CatalogService) {}

  protected readonly ViewingMode = ViewingMode;
}
