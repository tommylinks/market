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

    cartList = [];
    cartCount: number = 0;

    constructor( private dbSevice: DbService, private router: Router ){}

    items: Item[];

    goDetail(id) {
        this.router.navigate(['detail', id])
    }

    addToCart(item){

        this.cartList.push( item );

        this.cartCount++;

        console.log(this.cartList);
    }


    ngOnInit() {
        this.dbSevice.getData().subscribe( (data: Response) => this.items = data.json());
    }

}
