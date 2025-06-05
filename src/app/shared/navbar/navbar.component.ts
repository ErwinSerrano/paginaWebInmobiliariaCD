import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})


export class NavbarComponent {

  menuVisible = false;


    toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

    closeMenu() {
    this.menuVisible = false;
  }

}

