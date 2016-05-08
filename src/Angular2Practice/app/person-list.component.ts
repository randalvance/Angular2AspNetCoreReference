import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { Http } from '@angular/http';
import { PersonComponent } from './person.component';
import { PersonService } from './person.service';
import Person from './person';

@Component({
    selector: 'person-list',
    templateUrl: 'app/person-list.component.html',
    directives: [PersonComponent],
    providers: [PersonService]
})
export class PersonListComponent {
    constructor(private _personService: PersonService) { }


    @Output() changed = new EventEmitter<Person>();
    selectedPerson: Person;
    selectedID: number;

    ngOnInit() {
        this.getPersons();
    }

    getPersons() {
        this._personService.getPersons().subscribe(persons => {
            this.persons = persons;
        });
    }

    persons = [];

    select(person: Person) {
        this.selectedPerson = person;
        this.changed.emit(person);
    }

    highlightPerson(person: Person) {
        this.selectedID = person.Id;
    }
}

