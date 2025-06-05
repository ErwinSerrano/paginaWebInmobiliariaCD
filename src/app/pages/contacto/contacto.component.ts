import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';


@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})

export class ContactoComponent {
  contactForm: FormGroup;
  mostrarModal = false;
  checkboxMarcado = false;
  mensajeEnviado = false;


  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      telefono: ['', [Validators.required, Validators.pattern(/^3\d{9}$/)]],
      mensaje: [''],
      aceptaPolitica: [false, Validators.requiredTrue]
    });
  }

  abrirModal(event: Event) {
    event.preventDefault();
    this.mostrarModal = true;
  }

  cerrarModal() {
    this.mostrarModal = false;
  }

  aceptarPolitica() {
    this.contactForm.get('aceptaPolitica')?.setValue(true);
    this.checkboxMarcado = true;
    this.mostrarModal = false;
  }

  onSubmit() {
  if (this.contactForm.invalid) return;

  const templateParams = {
    nombre: this.contactForm.value.nombre,
    correo: this.contactForm.value.correo,
    telefono: this.contactForm.value.telefono,
    mensaje: this.contactForm.value.mensaje,
    aceptaPolitica: this.contactForm.value.aceptaPolitica
  };

  emailjs.send(
    'service_ooegyhk',
    'template_4t4xp84',
    templateParams,
    'aW9UBS4brqLFbjnUX'
  )
  .then((response) => {
    alert(`Mensaje enviado con éxito nos pondremos en contacto!`);
    this.mensajeEnviado = true;
    this.contactForm.reset();
  }, (error) => {
    console.error('Error al enviar:', error);
    alert('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
  });
}
}
