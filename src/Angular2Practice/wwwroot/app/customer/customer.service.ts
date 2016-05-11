import { Injectable, Inject } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Customer } from "./customer";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";

@Injectable()
export class CustomerService {

    // I am using @Inject for now to make http of type any and prevent errors on rxjs extensions not being resolved in typescript
    constructor(@Inject(Http) private http: any) {
    }

    getCustomers() {
        return this.http.get("api/customer")
            .do((response: Response) => console.log("Retrieving data..."))
            .map((response: Response) => <Customer[]>response.json());
    }
}
