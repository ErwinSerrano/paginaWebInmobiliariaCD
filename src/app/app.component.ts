import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { InicioComponent } from "./pages/inicio/inicio.component";
import { NosotrosComponent } from "./pages/nosotros/nosotros.component";
import { ServiciosComponent } from "./pages/servicios/servicios.component";
import { ContactoComponent } from "./pages/contacto/contacto.component";
import { FooterComponent } from "./shared/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, InicioComponent, NosotrosComponent, ServiciosComponent, ContactoComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cd-inmobiliaria';
}
