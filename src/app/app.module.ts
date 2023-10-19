import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'; 
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';  
import { HttpClientModule } from '@angular/common/http'; 
import { AltaRepartidoresComponent } from './alta-repartidores/alta-repartidores.component'; 
import { AltaRepartidorComponent } from './alta-repartidor/alta-repartidor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    AltaRepartidoresComponent,
    AltaRepartidorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [AuthGuard], // Agrega AuthGuard al arreglo de providers
  bootstrap: [AppComponent]
})
export class AppModule { }
