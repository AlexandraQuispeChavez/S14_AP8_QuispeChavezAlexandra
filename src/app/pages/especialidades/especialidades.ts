import { Component } from '@angular/core';

@Component({
  selector: 'app-especialidades',
  imports: [],
  templateUrl: './especialidades.html',
  styleUrl: './especialidades.css'
})
export class Especialidades {
  especialidades = [
    {
      titulo: 'Unidad de Cuidados Intensivos Neonatales (UCIN)',
      descripcion: 'Nuestra UCIN ofrece atención continua de alta complejidad para recién nacidos prematuros, de bajo peso o con condiciones críticas. Contamos con incubadoras de última generación, ventiladores neonatales y monitoreo 24/7.',
      imagen: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
      servicios: ['Ventilación asistida', 'Monitoreo continuo', 'Nutrición parenteral', 'Fototerapia']
    },
    {
      titulo: 'Neurología Neonatal',
      descripcion: 'Diagnóstico y tratamiento de alteraciones neurológicas en recién nacidos. Realizamos ecografías transfontanelares, electroencefalogramas neonatales y evaluaciones del neurodesarrollo.',
      imagen: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&q=80',
      servicios: ['Ecografía cerebral', 'EEG neonatal', 'Evaluación neurodesarrollo', 'Estimulación temprana']
    },
    {
      titulo: 'Cardiología Neonatal',
      descripcion: 'Especialistas en cardiopatías congénitas y problemas cardíacos en recién nacidos. Ecocardiografía fetal y neonatal, electrocardiograma y seguimiento cardiológico especializado.',
      imagen: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&q=80',
      servicios: ['Ecocardiografía', 'Holter neonatal', 'Cardiopatías congénitas', 'Seguimiento cardiológico']
    },
    {
      titulo: 'Diagnóstico por Imágenes',
      descripcion: 'Laboratorio e imagenología especializados para neonatos. Radiografías portátiles en la UCIN, ecografías abdominales, renales y de cadera neonatal sin necesidad de traslado.',
      imagen: 'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=400&q=80',
      servicios: ['Radiografía portátil', 'Ecografía abdominal', 'Ecografía renal', 'Ecografía de caderas']
    },
    {
      titulo: 'Nutrición Neonatal',
      descripcion: 'Soporte nutricional especializado para recién nacidos con dificultades de alimentación. Incluye nutrición parenteral, soporte para lactancia materna y alimentación enteral.',
      imagen: 'https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?w=400&q=80',
      servicios: ['Nutrición parenteral', 'Lactancia materna', 'Alimentación enteral', 'Banco de leche']
    },
    {
      titulo: 'Genética Médica',
      descripcion: 'Evaluación y diagnóstico de enfermedades genéticas y metabólicas en recién nacidos. Tamizaje neonatal ampliado y asesoría genética para las familias.',
      imagen: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&q=80',
      servicios: ['Tamizaje neonatal', 'Cariotipo', 'Asesoría genética', 'Errores innatos del metabolismo']
    }
  ];
}
