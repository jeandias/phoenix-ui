import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {JwtHelperService} from '@auth0/angular-jwt';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';
import {User} from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  private authUrl = 'http://localhost:3000/v1/auth/users/authenticate';  // URL to web api

  constructor(public jwtHelper:JwtHelperService, private http:HttpClient) {
  }

  public isAuthenticated():boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }

  public authenticate(user: User):Observable<User> {
    return this.http.post<User>(this.authUrl, {login: user.name, password: btoa(user.password)}, httpOptions).pipe(
      tap((user:User) => this.log(`user w/ id=${user.id}`)),
      catchError(this.handleError<User>('authenticate'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?:T) {
    return (error:any):Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message:string) {
    console.log(message);
  }
}
