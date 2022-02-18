import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', 
    component: FullLayoutComponent, 
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)},
      { path: 'cierrePedidos', loadChildren: () => import('./pages/cierre-pedidos/cierre-pedidos.module').then( m => m.CierrePedidosModule), canActivate: [RoleGuard]},
      { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), canActivate: [RoleGuard] },
      { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule) },
      { path: 'offers', loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersModule) },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'pageNotFound', loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
