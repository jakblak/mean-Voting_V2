"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var shared_module_1 = require('../shared/shared.module');
var router_1 = require('@angular/router');
var auth_service_1 = require('../auth/auth.service');
var auth_routes_1 = require('./auth.routes');
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            imports: [
                shared_module_1.SharedModule,
                router_1.RouterModule.forChild(auth_routes_1.AuthRoutes),
            ],
            declarations: [
                login_component_1.LoginComponent,
                signup_component_1.SignupComponent
            ],
            providers: [auth_service_1.AuthService]
        }), 
        __metadata('design:paramtypes', [])
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
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
//# sourceMappingURL=auth.module.js.map