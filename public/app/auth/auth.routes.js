"use strict";
var login_component_1 = require('./login/login.component');
var signup_component_1 = require('./signup/signup.component');
exports.AuthRoutes = [{
        path: 'authentication',
        component: AuthComponent,
        children: [
            { path: 'signin', component: login_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
        ],
    }];
//# sourceMappingURL=auth.routes.js.map