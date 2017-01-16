import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'mv-navbar',
  templateUrl: 'nav.component.html'
})

export class NavbarComponent {
  appName: string = "MEAN Voting";
}
