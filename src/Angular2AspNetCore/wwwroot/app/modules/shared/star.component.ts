import { Component, EventEmitter, Input, Output, OnChanges } from '@angular/core';

@Component({
    selector: 'star-rating',
    templateUrl: 'app/modules/shared/star.component.html',
    styleUrls: ['app/modules/shared/star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;

    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    ngOnChanges(): void {
        this.starWidth = this.rating * 86 / 5;
    } 

    onClick() {
        this.ratingClicked.emit(`The rating is ${this.rating}!`);
    }
}