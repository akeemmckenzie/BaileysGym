import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ExternalApiComponent } from './pages/external-api/external-api.component';
import { ErrorComponent } from './pages/error/error.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { FaqComponent } from './pages/faq/faq.component';
import { MembershipsComponent } from './pages/memberships/memberships.component';
import { CartComponent } from './pages/cart/cart.component';
import { Cart1Component } from './pages/cart1/cart1.component';
import { Cart2Component } from './pages/cart2/cart2.component';
import { Cart3Component } from './pages/cart3/cart3.component';
import { Checkout1Component } from './pages/checkout1/checkout1.component';
import { Checkout2Component } from './pages/checkout2/checkout2.component';
import { Checkout3Component } from './pages/checkout3/checkout3.component';
import { AboutComponent } from './pages/about/about.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'external-api',
    component: ExternalApiComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'error',
    component: ErrorComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'faq',
    component: FaqComponent,
    pathMatch: 'full',
  },
  {
    path: 'memberships',
    component: MembershipsComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart',
    component: CartComponent,
    pathMatch: 'full',
  },
  {
    path: 'cart1',
    component: Cart1Component,
    pathMatch: 'full',
  },
  {
    path: 'cart2',
    component: Cart2Component,
    pathMatch: 'full',
  },
  {
    path: 'cart3',
    component: Cart3Component,
    pathMatch: 'full',
  },
  {
    path: 'checkout1',
    component: Checkout1Component,
    pathMatch: 'full',
  },

  {
    path: 'checkout2',
    component: Checkout2Component,
    pathMatch: 'full',
  },
  {
    path: 'checkout3',
    component: Checkout3Component,
    pathMatch: 'full',
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
