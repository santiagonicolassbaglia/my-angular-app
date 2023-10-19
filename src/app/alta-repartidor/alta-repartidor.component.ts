import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {
  altaRepartidorForm: FormGroup;
  selectedCountry: string | null = null;
paises: any  = [];
  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.altaRepartidorForm = this.formBuilder.group({
      dni: ['', Validators.required],
      nombre: ['', Validators.required],
      edad: ['', Validators.required],
      capacidad: ['', Validators.required],
      pais: ['', Validators.required],
      unidadPropia: [false]
    });
  }

  ngOnInit() {
    this.obtenerTodosLosPaises3();
 
  }

  submitForm() {
    if (this.altaRepartidorForm.valid) {
      const formData = this.altaRepartidorForm.value;
      const selectedCountry = formData.pais; // País seleccionado

    }
  }

  obtenerTodosLosPaises3() {
    this.http.get('https://restcountries.com/v3.1/all').subscribe((data: any) => {
      console.log(data);

      data.map((auxPais: any) => {
        let pais = {
          nombre: auxPais.name.common,
          capital: auxPais.capital,
          region: auxPais.region,
          poblacion: auxPais.population,
          moneda: auxPais.currencies[0],
          esIndependiente: auxPais.independent,
          bandera: auxPais.flags.png,
          mapa: auxPais.maps.googleMaps
        };
        this.paises.push(pais);
        console.log(pais);
      });
    });
  }

  // Agrega esta función para manejar la selección de países holaa
  selectCountry(country: any) {
    this.selectedCountry = country;
  }
}





 
