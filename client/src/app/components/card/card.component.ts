import { Component, Input, OnInit } from '@angular/core';
import { BlogPost } from '../../core/interfaces/blog-post.interface';
import { TruncatePipe } from '../../core/pipes/truncate/truncate.pipe';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() blog!: BlogPost;

  constructor(public truncate: TruncatePipe) {}

  ngOnInit(): void {
    this.blog.title = this.truncate.transform(this.blog.title, [40]);
    this.blog.description = this.truncate.transform(this.blog.description, [
      130,
    ]);
  }
}
