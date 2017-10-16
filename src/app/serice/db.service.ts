import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


@Injectable()
export class DbService {
    data;

    array;

    result;

    constructor( private http: Http) {}

    getData() {

        this.data = this.http.get('db.json');
        return this.data;
    }

    getById(id) {
        return this.data.map( item => item.json().filter( item => item.id == id) );

    }

}