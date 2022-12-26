import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';

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
  @Input() control!: FormControl;
  @Output() event: any;
  @Input() label: string = '';
  @ViewChild('input')
  input!: ElementRef<HTMLInputElement>;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.event = new EventEmitter<any>();
  }

  handleOnChange(param: any) {
    this.event.emit(param);
  }

  handleOnClick(param?: any) {
    this.event.emit(param);
  }

  handleDisplayErrors() {
    const { dirty, touched, errors } = this.control;

    return dirty && touched && errors;
  }
}
