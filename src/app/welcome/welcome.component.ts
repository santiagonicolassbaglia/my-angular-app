import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  userData: any; // Aquí almacenaremos los datos del usuario de GitHub.
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.github.com/users/octaviovillegas').subscribe((data: any) => {
      // Aquí puedes acceder a los datos de GitHub y mostrarlos en tu plantilla HTML
      this.userData = data;
    });
 
  }
}