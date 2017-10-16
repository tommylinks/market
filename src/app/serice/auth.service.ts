import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    login(login: string, password: string) {
        if(login == "admin" && password == "admin") {

            sessionStorage.setItem('isLoggedIn', 'true');

            return this.isLoggedIn = true;
        }
        return this.isLoggedIn;
    }
}