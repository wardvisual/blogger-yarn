import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

enum ButtonType {
  PRIMARY,
  SECONDARY,
  OUTLINE,
}

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name: String = '';
  @Input() type: String = '';
  @Input() size: String = '';
  @Output() onClick = new EventEmitter();

  constructor() {}

  public emitEvent() {
    this.onClick.emit();
  }

  ngOnInit(): void {}
}
