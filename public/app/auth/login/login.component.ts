import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  errorMessage: string;
  credentials: any = {};

  constructor (private _authService: AuthService,
                        private _router: Router) { }

  login() {
    this._authService.login(this.credentials)
    .subscribe(
      result  => this._router.navigate(['/']),
      error =>  this.errorMessage = error
     );
  }
}