import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import '@github/markdown-toolbar-element';
import { marked } from 'marked';

@Component({
  selector: 'app-markdown',
  templateUrl: './markdown.component.html',
  styleUrls: ['./markdown.component.scss'],
})
export class MarkdownComponent implements OnInit {
  @Input() formControlName: string = '';
  @Input() required: string = '';
  @Input() content: string = '';
  @Output() event!: EventEmitter<string>;

  constructor() {}

  ngOnInit(): void {
    this.event = new EventEmitter<string>();
  }

  sendData(): void {
    this.event.emit(marked(this.content));
  }
}
