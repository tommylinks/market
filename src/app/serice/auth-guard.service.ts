import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Injectable()
export class AuthGuardService implements CanActivate {
    isLoggedIn;

    constructor(private authService: AuthService, private router: Router){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        this.isLoggedIn = this.authService.isLoggedIn ||  sessionStorage.getItem("isLoggedIn");

        if( this.isLoggedIn ) {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    }

}