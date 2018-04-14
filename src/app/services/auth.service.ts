import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators';

import {User} from "../models/user";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class AuthService {

  private authUrl = 'https://phoenix.euroconsumers.org/api/v1/auth/users/authenticate';  // URL to web api

  constructor(private http:HttpClient) {
  }

  authenticate(user:User):Observable<User> {
    return this.http.post<User>(this.authUrl, {login: user.name, password: btoa(user.password)}, httpOptions).pipe(
      tap((data:any) => {
        localStorage.setItem('user', JSON.stringify(data.user));
        localStorage.setItem('token', data.token);
        return true;
      }),
      catchError(this.handleError<User>('authenticate'))
    );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
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
