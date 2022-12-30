import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  @Input() counter: number = 1;
  @Output() counterEmitter = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {}

  onDecrement() {
    this.counter >= 2 && this.counter--;
    this.counterEmitter.next(this.counter);
  }

  onIncrement() {
    this.counterEmitter.next(++this.counter);
  }
}
