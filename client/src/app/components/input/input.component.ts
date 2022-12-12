import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() type: string = '';
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() value: string = '';
  @Input() required: string = '';
  @Input() disabled: string = '';
  @Input() iconLeft: string = '';
  @Input() iconRight: string = '';
  @Input() modifyFor: string = '';
  @Input() placeholder: string = '';
  @Input() routerLink: string = '';
  @Input() routerLinkActive: string = '';
  @Output() event: any;

  constructor() {}

  ngOnInit(): void {
    this.event = new EventEmitter<any>();
  }

  handleOnChange(param: any) {
    this.event.emit(param);
  }

  handleOnClick(param: any) {
    this.event.emit(param);
  }
}
