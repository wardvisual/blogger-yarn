import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../../core/services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class Create implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private postService: PostService
  ) {}

  imageCover: any = '';
  coverImageErrorMsg: string = '';
  public markdown: string = '';

  public form = this.formBuilder.group({
    title: '',
    content: '',
    imageUrl: this.imageCover.split('\\')[2],
    userId: 7,
    categoryId: 7,
  });

  public submitForm(): void {
    this.postService.post(this.form.value).subscribe();
  }

  public onImageCoverSelected(event: any): void {
    const file = event.target.files[0].name;
    const mimeType = event.target.files[0].type;

    if (mimeType.match(/image\/*/) == null) {
      this.coverImageErrorMsg = 'Only image is supported';
    }

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = () => {
      this.imageCover = reader.result;
      this.coverImageErrorMsg = '';
    };
  }

  public onRemoveImage(): void {
    this.imageCover = '';
    this.coverImageErrorMsg = '';
  }

  ngOnInit(): void {}
}
