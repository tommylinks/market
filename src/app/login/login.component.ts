import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../serice/auth.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    userLogin: string;
    userPassword: string;
    errorForm: boolean = false;


    constructor(private authService: AuthService, private router: Router){}

    login() {
        this.authService.login(this.userLogin, this.userPassword);
        if(this.authService.isLoggedIn) {
            return this.router.navigate(['catalog']);
        }
        this.errorForm = true;
        return false;
    }
}