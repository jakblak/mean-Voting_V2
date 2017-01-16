import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mv-navbar',
  templateUrl: 'nav.component.html'
})

export class NavbarComponent {
  appName: string = "MEAN Voting";

  navItems: any[] = [
    { routerLink: '#', label: 'Home', active: true},
    { routerLink: '#', label: 'Add New', active: false},
    { routerLink: "['/auth/login']", label: 'Log In', active: false},
    { routerLink: '#', label: 'Sign Up', active: false},
    { routerLink: '#', label: 'Sign Out', active: false}
  ];
}
