import { Component, OnInit } from '@angular/core';
import { discardPeriodicTasks } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { disableDebugTools, DomSanitizer } from '@angular/platform-browser';

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

  imageCover: any = '';
  coverImageErrorMsg: string = '';

  public createForm = this.formBuilder.group<Creatable>({
    title: '',
    description: '',
    imageUrl: this.imageCover,
  });

  public submitForm(): void {
    console.log({ value: this.createForm.value });
  }

  public onImageCoverSelected(event: any): void {
    const file = event.target.files[0].name;
    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.coverImageErrorMsg = 'Only image is supported';
    }

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (_event) => {
      this.imageCover = reader.result;
      console.log({ _event, reader });
    };
  }

  ngOnInit(): void {}
}
