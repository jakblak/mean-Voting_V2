import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'mt-login',
  templateUrl: 'login.template.html'
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