import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { AuthService } from '../auth/auth.service';

import { AuthRoutes } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(AuthRoutes),
  ],
  declarations: [
    LoginComponent,
    SignupComponent
  ],
  providers: [ AuthService ]
})
export class AuthModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';

// import { AuthRoutes } from './auth.routes';
// import { AuthComponent } from './auth.component';
// import { LoginComponent } from './login/login.component';
// import { SignupComponent } from './signup/signup.component';

// @NgModule({
//   imports: [
//     CommonModule,
//     FormsModule,
//         RouterModule.forChild([
//     { path: 'login', component: LoginComponent },
//     { path: 'signup', component: SignupComponent }
//     ])
//   ],
//   declarations: [
//     AuthComponent,
//     LoginComponent,
//     SignupComponent,
//   ]
// })
// export class AuthModule {}

