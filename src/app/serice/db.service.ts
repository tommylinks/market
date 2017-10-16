import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class DbService {



    constructor( private http: Http) {}

    getData() {
        return this.http.get('http://localhost:2403/items');
    }

    getById(id) {
        return this.http.get('http://localhost:2403/items').map( item => item.json().filter( item => item.id == id));
    }

}