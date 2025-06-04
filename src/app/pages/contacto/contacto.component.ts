import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
// import emailjs from 'emailjs-com'; // 👉 Activa esto cuando tengas el correo

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
      telefono: ['', Validators.required],
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

    // 👇 Aquí se simula el envío
    console.log('Formulario simulado para enviar:');
    console.log(this.contactForm.value);

    this.mensajeEnviado = true;
    this.contactForm.reset();

    // 📨 Cuando tengas correo corporativo, descomenta esto:
    /*
    const templateParams = {
      nombre: this.contactForm.value.nombre,
      email: this.contactForm.value.email,
      mensaje: this.contactForm.value.mensaje
    };

    emailjs.send('TU_SERVICE_ID', 'TU_TEMPLATE_ID', templateParams, 'TU_PUBLIC_KEY')
      .then((response) => {
        console.log('Correo enviado con éxito!', response.status, response.text);
        this.mensajeEnviado = true;
        this.contactForm.reset();
      }, (error) => {
        console.error('Error al enviar:', error);
        alert('Hubo un problema al enviar el mensaje. Intenta de nuevo.');
      });
    */
  }
}
