import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import Person from './person';

@Injectable()
export class PersonService {

    constructor(private _http: Http) {
    }

    getPersons() {
        return this._http.get('api/person').map((response: Response) => <Person[]>response.json());
    }
}
