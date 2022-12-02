import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
  @Input() inputFor: string = '';
  @Input() placeholder: string = '';
  @Output() event = new EventEmitter<any>();

  render: boolean = false;

  constructor() {}

  ngOnInit(): void {
    if (this.type === 'textarea') {
      this.type = this.type;
    }
  }

  handleOnChange(param: any) {
    this.event.emit(param);
  }

  handleOnClick(param: any) {
    this.event.emit(param);
  }
}
