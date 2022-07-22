import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: '', component: LoginComponent }, // login
  { path: 'home', 
    component: FullLayoutComponent, 
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)},
      { path: 'cierrePedidos', loadChildren: () => import('./pages/cierre-pedidos/cierre-pedidos.module').then( m => m.CierrePedidosModule), canActivate: [RoleGuard]},
      { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), canActivate: [RoleGuard] },
      { path: 'productsDelete', loadChildren: () => import('./pages/productsdeletes/productsdeletes.module').then(m => m.ProductsdeletesModule), canActivate: [RoleGuard] },
      { path: 'offers', loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersModule), canActivate: [RoleGuard] },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'sip',
    component: FullLayoutComponent,
    children: [
      { path: 'listarUsuarios', loadChildren: () => import('./pages/sip/listar-usuarios/listar-usuarios.module').then(m => m.ListarUsuariosModule), canActivate: [RoleGuard] },
      { path: 'crearUsuarios', loadChildren: () => import('./pages/sip/crear-usuarios/crear-usuarios.module').then(m => m.CrearUsuariosModule), canActivate: [RoleGuard] },
      { path: 'crearGerenteZona', loadChildren: () => import('./pages/sip/crear-gerente-zona/crear-gerente-zona.module').then(m => m.CrearGerenteZonaModule), canActivate: [RoleGuard] },
      { path: 'listarGerentesZona', loadChildren: () => import('./pages/sip/listar-gerentes-zona/listar-gerentes-zona.module').then(m => m.ListarGerentesZonaModule), canActivate: [RoleGuard] },
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'profile',
    component: FullLayoutComponent,
    children: [
      { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
      { path: 'documentos', loadChildren: () => import('./pages/documentos/documentos.module').then(m => m.DocumentosModule) },
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
