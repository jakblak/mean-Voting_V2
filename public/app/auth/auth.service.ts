import 'rxjs/Rx';   // use rxjs-extensions.ts file
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class AuthService {
  public user = window['user'];

  private _loginURL = 'api/users/login';
  private _signupURL = 'api/users/signup';

  constructor (private http: Http) { }

  isLoggedIn(): boolean {
  	return (!!this.user);
  }

  login(credentials: any): Observable<any> {
    	let body = JSON.stringify(credentials);
    	let headers = new Headers({ 'Content-Type': 'application/json' });
    	let options = new RequestOptions({ headers: headers });

  	return this.http
             .post(this._loginURL, body, options)
             .map(res => this.user = res.json())
             .catch(this.handleError)
  	}

  signup(user: any): Observable<any> {
  	let body = JSON.stringify(user);
  	let headers = new Headers({ 'Content-Type': 'application/json' });
  	let options = new RequestOptions({ headers: headers });

  return this.http
                      .post(this._signupURL, body, options)
                      .map(res => this.user = res.json())
                      .catch(this.handleError)
  }

  private handleError(error: Response) {
  	console.error(error);
  	return Observable.throw(error.json().message || 'Server error');
  }

}