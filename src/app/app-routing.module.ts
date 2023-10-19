import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AltaRepartidoresComponent } from './alta-repartidores/alta-repartidores.component';
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';




const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'alta-repartidor', component: AltaRepartidorComponent },
  // { path: 'alta-repartidor', component: AltaRepartidorComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', redirectTo: '/welcome', pathMatch: 'full' }
];
@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
