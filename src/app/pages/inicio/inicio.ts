import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css'
})
export class Inicio {
  stats = [
    { numero: '3,500+', label: 'Bebés atendidos' },
    { numero: '15+', label: 'Años de experiencia' },
    { numero: '98%', label: 'Tasa de satisfacción' },
    { numero: '24/7', label: 'Atención continua' },
  ];

  servicios = [
    { titulo: 'UCI Neonatal', desc: 'Unidad de cuidados intensivos de última tecnología para recién nacidos prematuros o con condiciones críticas.' },
    { titulo: 'Control de Desarrollo', desc: 'Seguimiento integral del crecimiento y desarrollo neurológico del neonato desde su nacimiento.' },
    { titulo: 'Apoyo a la Lactancia', desc: 'Asesoría y apoyo profesional para la lactancia materna exclusiva durante los primeros meses.' },
    { titulo: 'Diagnóstico Avanzado', desc: 'Laboratorios especializados y equipos de imagenología de alta resolución para diagnóstico preciso.' },
  ];
}
