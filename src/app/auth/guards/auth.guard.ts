import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService
    ) { }

    canActivate(): boolean {
        const currentToken = this.authenticationService.authValue;
        if (currentToken) {
            return true;
        }

        this.router.navigate(['/auth/login']);
        return false;
    }
}
