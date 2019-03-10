import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDateSelector]'
})
export class DateSelectorDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    const date = new Date();
    date.setDate(date.getDate());

    this.element.nativeElement.actionReturnDate({
      startDate: date
    });
  }

}
