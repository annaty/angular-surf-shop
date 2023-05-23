import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { UserProfileComponent } from "./pages/user-profile/user-profile.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { ChatComponent } from "./pages/chat/chat.component";

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
  },
  {
    path: 'orders',
    component: OrdersComponent,
  },
  {
    path: 'chat',
    component: ChatComponent
  },
  { path: '', redirectTo: '/catalog', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
