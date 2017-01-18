import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  templateUrl: 'signup.template.html'
})
export class SignupComponent {
  errorMessage: string;
  user: any = {};

  constructor (private _authService: AuthService,
                        private _router: Router) { }

  signup() {
    this._authService.signup(this.user)
          .subscribe(
            result  => this._router.navigate(['/']),
            error =>  this.errorMessage = error
          );
  }
}