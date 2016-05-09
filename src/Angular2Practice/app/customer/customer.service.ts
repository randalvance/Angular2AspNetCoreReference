import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Customer } from './customer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class CustomerService {

    constructor(private http: Http) {
    }

    getCustomers() {
        return this.http.get('api/customer')
            .do((response: Response) => console.log("Retrieving data..."))
            .map((response: Response) => <Customer[]>response.json());
    }
}
