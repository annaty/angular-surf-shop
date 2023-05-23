import { Component, Input } from '@angular/core';
import { CatalogService, Product } from "../../services/catalog.service";
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent {
  @Input() product!: Product;
  @Input() mode!: ViewingMode;

  constructor(private catalogService: CatalogService, private _snackBar: MatSnackBar) {}

  buy(id: string) {
    this.catalogService.buyProduct(id);
    this._snackBar.open('Your purchase can be found in your orders', 'Close', {
      duration: 4000,
    });
  }

  deleteItem(id: string) {
    this.catalogService.deleteItem(id);
    this._snackBar.open('Your item has been deleted', 'Close', {
      duration: 4000,
    });
  }

  protected readonly ViewingMode = ViewingMode;
}

export enum ViewingMode {
  CATALOG,
  ORDER,
  PROFILE
}
