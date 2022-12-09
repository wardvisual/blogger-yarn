import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { BlogService } from '../../core/services/blog.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BlogPost } from '../../core/interfaces/blog-post.interface';

interface Post {
  title: string;
}

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public form!: FormGroup;
  post!: Post;
  testData: BlogPost[] = [];

  constructor(
    public blogService: BlogService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.testData = this.blogService.getTestData();
  }

  formGroup = this.formBuilder.group<{}>({
    title: '# da',
    content:
      'A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of features, ',
    imageUrl: '',
    categoryId: 7,
    userId: 7,
  });

  public hidePreview() {
    alert('exit');
  }
  public onSubmit(): void {
    this.blogService.post(this.formGroup.value).subscribe();
    console.log('Submitted successfully!');
  }
}
