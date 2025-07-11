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
      { path: 'cierrePedidos', loadChildren: () => import('./pages/cierre-pedidos/cierre-pedidos.module').then( m => m.CierrePedidosModule), canActivate: [RoleGuard], data:{ role: ['CN=gadmin','CN=gvtassup']} },
      { path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule), canActivate: [RoleGuard], data:{role:['CN=gadmin','CN=gmktgsup']} },
      { path: 'productsDelete', loadChildren: () => import('./pages/productsdeletes/productsdeletes.module').then(m => m.ProductsdeletesModule), canActivate: [RoleGuard], data:{role:['CN=gadmin','CN=gmktgsup']} },
      { path: 'offers', loadChildren: () => import('./pages/offers/offers.module').then(m => m.OffersModule), canActivate: [RoleGuard], data:{role:['CN=gadmin','CN=gmktgsup','CN=gvtassup']} },
    ],
    canActivate: [AuthGuard]
  },
  { path: 'sip',
    component: FullLayoutComponent,
    children: [
      { path: 'listarUsuarios', loadChildren: () => import('./pages/sip/listar-usuarios/listar-usuarios.module').then(m => m.ListarUsuariosModule), canActivate: [RoleGuard], data:{role:['CN=gadmin']} },
      { path: 'crearUsuarios', loadChildren: () => import('./pages/sip/crear-usuarios/crear-usuarios.module').then(m => m.CrearUsuariosModule), canActivate: [RoleGuard], data:{role:['CN=gadmin']} },
      { path: 'crearGerenteZona', loadChildren: () => import('./pages/sip/crear-gerente-zona/crear-gerente-zona.module').then(m => m.CrearGerenteZonaModule), canActivate: [RoleGuard], data:{role:['CN=gadmin']} },
      { path: 'listarGerentesZona', loadChildren: () => import('./pages/sip/listar-gerentes-zona/listar-gerentes-zona.module').then(m => m.ListarGerentesZonaModule), canActivate: [RoleGuard], data:{role:['CN=gadmin']} },
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
  { path: 'menus', loadChildren: () => import('./pages/menus/menus.module').then(m => m.MenusModule) },
  { path: '**', pathMatch: 'full', redirectTo: '/pageNotFound' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
