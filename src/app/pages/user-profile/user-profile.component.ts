import { Component } from '@angular/core';
import { User, UserService } from "../../services/user.service";
import { ActivatedRoute } from "@angular/router";
import { CatalogService, Product } from "../../services/catalog.service";
import { Observable } from "rxjs";
import { ViewingMode } from "../../shared/list-item/list-item.component";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  user?: User;
  items?: Observable<Product[]>;

  constructor(private userService: UserService, private catalogService: CatalogService, private route: ActivatedRoute) {
    this.user = this.userService.getUserById(this.route.snapshot.params['id']);
    if (this.user) {
      this.items = this.catalogService.getUserItems(this.user?.id);
    }
  }

  protected readonly ViewingMode = ViewingMode;
}
