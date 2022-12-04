import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  public form!: FormGroup;
  public markdownText: string = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      description: this.markdownText,
      banner: '',
      userId: 7,
      categoryId: 7,
    });
  }

  get descriptionRawControl() {
    return this.form.controls['description'] as FormControl;
  }
  getData() {
    console.log(this.markdownText);
    console.log(true);
  }
}
