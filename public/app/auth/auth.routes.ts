import { Routes } from '@angular/router';

// import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const AuthRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
  ],
}];
