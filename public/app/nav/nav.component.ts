import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mv-navbar',
  templateUrl: 'nav.component.html'
})

export class NavbarComponent {
  appName: string = "MEAN Voting";

  navItems: any[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'Add New', active: false},
    {href: '#', label: 'Log In', active: false},
    {href: '#', label: 'Sign Up', active: false},
    {href: '#', label: 'Sign Out', active: false}
  ];
}
