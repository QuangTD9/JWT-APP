import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthToken } from '@app/models';
import { environment } from '@environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentTokenSubject$: BehaviorSubject<AuthToken>;

  constructor(private http: HttpClient) {
    this.currentTokenSubject$ = new BehaviorSubject<AuthToken>(JSON.parse(localStorage.getItem('currentToken')));
  }

  public get authValue(): AuthToken {
    return this.currentTokenSubject$.value;
  }

  login(username: string, password: string): Observable<AuthToken> {
    return this.http.post<AuthToken>(`${environment.apiUrl}login`, { username, password })
      .pipe(map(user => {
        localStorage.setItem('currentToken', JSON.stringify(user));
        this.currentTokenSubject$.next(user);
        return user;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentToken');
    this.currentTokenSubject$.next(null);
  }
}
