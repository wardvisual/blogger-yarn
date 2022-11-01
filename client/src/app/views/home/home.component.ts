import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../core/services/post.service';
import { FormBuilder } from '@angular/forms';

interface Post {
  title: string;
}

@Component({
  selector: 'view-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  post!: Post;

  constructor(
    public postService: PostService,
    private formBuilder: FormBuilder
  ) {}

  formGroup = this.formBuilder.group<{}>({
    title: '',
    description:
      'A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of features, ',
    imageUrl: '',
    categoryId: 7,
    userId: 7,
  });

  ngOnInit(): void {
    this.postService.get().subscribe((res) => console.log({ res }));
  }

  public onSubmit(): void {
    this.postService.post(this.formGroup.value).subscribe();
    console.log('Submitted successfully!');
  }
}
