import { Component, ViewChild } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { PersonListComponent } from './person-list.component';
import Person from './person';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    directives: [PersonListComponent],
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {
    firstName: string = "Foo";
    lastName: string = "Bar";

    @ViewChild(PersonListComponent) personListComponent: PersonListComponent;

    triggerChangeEvent(changedPerson: Person) {
        if (changedPerson) {
            this.personListComponent.highlightPerson(changedPerson);
        }
    }
}