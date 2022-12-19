import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { BlogPost } from 'src/app/core/interfaces/blog-post.interface';
import { CreateBlogService } from './create-blog.service';
import { catchError, map, tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.scss'],
})
export class CreateBlogComponent implements OnInit, OnDestroy {
  public form!: FormGroup;
  public markdownText: string = '';
  private subscriptions$ = new Subscription();

  constructor(
    private blogService: CreateBlogService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.form = this.formBuilder.group<BlogPost>({
      user: {
        name: '',
        username: '',
        avatar: '',
      },
      thumbnail: '',
      title: '',
      content: '',
      tags: [],
      date: '',
      stats: {
        reactions: 0,
        comment: [{}],
      },
    });
  }

  ngOnInit(): void {}

  public post() {
    this.blogService
      .post(this.form.getRawValue())
      .pipe(tap(() => this.router.navigate(['../'])))
      .subscribe();
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
