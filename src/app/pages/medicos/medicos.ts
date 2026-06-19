import { Component } from '@angular/core';

@Component({
  selector: 'app-medicos',
  imports: [],
  templateUrl: './medicos.html',
  styleUrl: './medicos.css'
})
export class Medicos {
  medicos = [
    {
      nombre: 'Dra. Carmen Sánchez Ríos',
      especialidad: 'Jefa de Neonatología',
      descripcion: 'Especialista en cuidados intensivos neonatales con 18 años de experiencia. Fellow del Boston Children\'s Hospital.',
      imagen: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&q=80',
      horario: 'Lun–Vie: 8am–2pm',
      anos: 18
    },
    {
      nombre: 'Dr. Marcos Villanueva Cruz',
      especialidad: 'Neonatólogo – UCIN',
      descripcion: 'Subespecialista en ventilación neonatal y síndrome de dificultad respiratoria. Certificado por el Colegio Médico del Perú.',
      imagen: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=300&q=80',
      horario: 'Lun–Sáb: 2pm–8pm',
      anos: 12
    },
    {
      nombre: 'Dra. Lucía Paredes Montoya',
      especialidad: 'Neuróloga Neonatal',
      descripcion: 'Especialista en trastornos neurológicos neonatales y encefalopatía hipóxico-isquémica. Doctorado por la UPCH.',
      imagen: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&q=80',
      horario: 'Mar–Jue: 9am–3pm',
      anos: 10
    },
    {
      nombre: 'Dr. Andrés Castillo Vega',
      especialidad: 'Cardiólogo Neonatal',
      descripcion: 'Experto en cardiopatías congénitas y ecocardiografía fetal. Más de 500 cirugías cardíacas neonatales realizadas.',
      imagen: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&q=80',
      horario: 'Lun–Mié–Vie: 10am–4pm',
      anos: 15
    },
    {
      nombre: 'Dra. Patricia Flores Huanca',
      especialidad: 'Nutricionista Neonatal',
      descripcion: 'Especialista en nutrición parenteral y enteral neonatal. Coordinadora del banco de leche materna de la clínica.',
      imagen: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=300&q=80',
      horario: 'Lun–Vie: 7am–1pm',
      anos: 8
    },
    {
      nombre: 'Dr. Roberto Morales Pérez',
      especialidad: 'Genetista – Tamizaje Neonatal',
      descripcion: 'Especialista en diagnóstico genético y errores innatos del metabolismo. Pionero del programa de tamizaje neonatal ampliado.',
      imagen: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=300&q=80',
      horario: 'Mar–Jue–Sáb: 8am–2pm',
      anos: 20
    }
  ];
}
