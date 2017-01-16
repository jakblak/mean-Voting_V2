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
require('rxjs/Rx'); // use rxjs-extensions.ts file
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
        this.user = window['user'];
        this._loginURL = 'api/users/login';
        this._signupURL = 'api/users/signup';
    }
    AuthService.prototype.isLoggedIn = function () {
        return (!!this.user);
    };
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var body = JSON.stringify(credentials);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._loginURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.signup = function (user) {
        var _this = this;
        var body = JSON.stringify(user);
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http
            .post(this._signupURL, body, options)
            .map(function (res) { return _this.user = res.json(); })
            .catch(this.handleError);
    };
    AuthService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().message || 'Server error');
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map