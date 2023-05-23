import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-surf-shop';

  constructor(private router: Router) {
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  goToOrders() {
    this.router.navigate(['/orders']);
  }

  goToProfile() {
    this.router.navigate(['/profile/1']);
  }

  goToChat() {
    this.router.navigate(['/chat']);
  }
}
