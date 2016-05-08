import { Component, Input } from '@angular/core';
import Person from './person';

@Component({
    selector: 'person-detail',
    templateUrl: 'app/person.component.html'
})
export class PersonComponent {
    @Input() person: Person;
}