import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit {
  public form!: FormGroup;
  public markdownText: string = '';
  row: number = 12;

  constructor(private formBuilder: FormBuilder) {}

  onChange(e: any) {
    console.log(e.getContent());
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      content: '',
      banner: '',
      userId: 7,
      categoryId: 7,
    });
  }
}
