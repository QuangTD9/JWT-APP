import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { User } from '@app/models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getUsers(page: number): Observable<User[]> {
        return this.http.get<User[]>(`${environment.apiUrl}users?page=${page}`);
    }
}
