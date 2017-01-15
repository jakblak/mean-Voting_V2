import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthRoutes } from './auth.routes';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes),
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    SignupComponent,
  ]
})
export class AuthModule {}
