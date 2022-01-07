import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', 
    component: FullLayoutComponent, 
    children: [
      { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then( m => m.DashboardModule)},
      { path: 'cierrePedidos', loadChildren: () => import('./pages/cierre-pedidos/cierre-pedidos.module').then( m => m.CierrePedidosModule)},
      { path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule) },
    ],
    canActivate: [AuthGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
