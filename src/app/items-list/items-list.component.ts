import {Component, OnInit} from '@angular/core';
import { Item } from "../shared/item";
import {Router} from "@angular/router";

import { Response } from "@angular/http";

import { DbService } from "../serice/db.service";

@Component({
    selector: 'items-list',
    templateUrl: './items-list.component.html',
    styleUrls: ['./items-list.component.css'],
})
export class ItemsListComponent implements OnInit{

    title = 'Список товаров';

    constructor( private dbSevice: DbService, private router: Router ){}

    items: Item[];

    goDetail(id) {
        // this.dbSevice.getById(id).subscribe( data => console.log(data[0]));
        this.router.navigate(['detail', id])
    }


    ngOnInit() {
        this.dbSevice.getData().subscribe( (data: Response) => this.items = data.json());
    }

}
