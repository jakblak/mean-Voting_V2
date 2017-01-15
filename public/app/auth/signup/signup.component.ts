import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  moduleId: module.id,
  selector: 'mt-signup',
  templateUrl: 'signup.component.html'
})
export class SignupComponent {
  errorMessage: string;
  user: any = {};

  constructor (private _authenticationService: AuthService,
         private _router: Router) { }

  signup() {
    this._authenticationService.signup(this.user)
          .subscribe(
            result  => this._router.navigate(['/']),
            error =>  this.errorMessage = error
          );
  }
}