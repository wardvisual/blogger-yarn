import { Injectable } from '@angular/core';
import { BlogPost } from 'src/app/core/interfaces/blog-post.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CreateBlogService {
  constructor(private http: HttpClient) {}

  public post(blogPost: BlogPost): Observable<BlogPost> {
    return this.http.post<BlogPost>('/api/blog', blogPost);
  }
}
