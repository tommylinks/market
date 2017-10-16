import { Component, OnDestroy, OnInit } from "@angular/core";
import { DbService } from "../serice/db.service";
import { ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {Item} from "../shared/item";

@Component({
    selector: 'app-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnDestroy, OnInit{

    id:number;
    private subscription: Subscription;
    item: Item;


    constructor(private dbSevice: DbService, private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);

        this.dbSevice.getById(this.id).subscribe( data => this.item = data[0]);
        console.log(this.item);
        console.log(this.id);
    }

    ngOnInit() {


    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}