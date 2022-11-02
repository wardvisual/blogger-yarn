import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

interface Creatable {
  title: string;
  description: string;
  imageUrl: string;
}
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class Create implements OnInit {
  constructor(private formBuilder: FormBuilder) {}

  public createForm = this.formBuilder.group<Creatable>({
    title: '',
    description: '',
    imageUrl: '',
  });

  public submitForm(): void {
    console.log({ value: this.createForm.value });
  }

  ngOnInit(): void {}
}
