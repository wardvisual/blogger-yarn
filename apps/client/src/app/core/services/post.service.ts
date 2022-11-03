import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  path = 'post';

  constructor(private readonly apiService: ApiService) {}

  public get(slug?: string, params?: HttpParams): Observable<{} | []> {
    return this.apiService.get(`${this.path}/${slug || ''}`, params);
  }

  public post(body: Object = {}): Observable<{}> {
    return this.apiService.post(`${this.path}`, body);
  }
}
