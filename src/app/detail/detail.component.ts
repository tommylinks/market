import { Component, OnDestroy, OnInit } from "@angular/core";
import { DbService } from "../service/db.service";
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
    public item = [];


    constructor(private dbSevice: DbService, private activateRoute: ActivatedRoute){
        this.subscription = activateRoute.params.subscribe(params=>this.id=params['id']);
    }

    ngOnInit() {
        this.dbSevice.getById(this.id).subscribe( (data) => this.item = data[0]);
    }

    ngOnDestroy(){
        this.subscription.unsubscribe();
    }

}