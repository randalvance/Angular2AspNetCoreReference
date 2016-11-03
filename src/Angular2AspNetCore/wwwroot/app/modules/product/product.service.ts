import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from './product';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {
    private serviceUrl: string = 'api/product';

    // Once Visual Studio support for Typescript improves, we will remove the @Inject
    constructor(@Inject(Http) private http: any) { }

    getProducts() : Observable<Product[]> {
        return this.http.get(this.serviceUrl)
            .map((response: Response) => <Product[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProduct(id: number) : Observable<Product> {
        return this.http.get(`${this.serviceUrl}/${id}`)
            .map((response: Response) => <Product>response.json())
            .do (data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {

    }
}