import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alta-repartidores',
  templateUrl: './alta-repartidores.component.html',
  styleUrls: ['./alta-repartidores.component.css']
})
export class AltaRepartidoresComponent {
  altaRepartidorForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.altaRepartidorForm = this.formBuilder.group({
      dni: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      // Otros campos del formulario y validaciones aquí
    });
  }
  

  onSubmit() {
    if (this.altaRepartidorForm.valid) {
      // Procesa el alta del repartidor y guarda los datos
      // Puedes utilizar un servicio para enviar los datos al servidor o guardarlos localmente
    } else {
      // Maneja los errores de validación y muestra mensajes al usuario
    }
  }
}
