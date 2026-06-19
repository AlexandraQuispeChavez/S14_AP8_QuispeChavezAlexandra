import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [FormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css'
})
export class Contacto {
  formulario = {
    nombre: '',
    email: '',
    telefono: '',
    asunto: '',
    mensaje: ''
  };

  enviado = false;

  enviarFormulario() {
    if (this.formulario.nombre && this.formulario.email && this.formulario.mensaje) {
      this.enviado = true;
      setTimeout(() => {
        this.enviado = false;
        this.formulario = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '' };
      }, 4000);
    }
  }

  contactInfo = [
    { titulo: 'Dirección', detalle: 'Av. Salaverry 1450, Jesús María, Lima – Perú' },
    { titulo: 'Teléfono', detalle: '(01) 234-5678 / (01) 234-5679' },
    { titulo: 'Emergencias 24/7', detalle: '+51 987 654 321' },
    { titulo: 'Email', detalle: 'contacto@bebevida.pe' },
    { titulo: 'Horario de consultas', detalle: 'Lunes a Sábado: 7:00am – 8:00pm' },
  ];
}
