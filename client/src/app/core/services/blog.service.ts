import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map, Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { BlogPost } from '../interfaces/blog-post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  path: string = 'post';

  constructor(private readonly apiService: ApiService) {}

  public get(slug?: string, params?: HttpParams): Observable<{} | []> {
    return this.apiService.get(`${this.path}/${slug || ''}`, params);
  }

  public post(body: Object = {}): Observable<{}> {
    return this.apiService.post(`${this.path}`, body);
  }

  public upload(formData: FormData): Observable<{}> {
    return this.apiService.post<FormData>(`${this.path}/upload`, formData);
  }

  public getTestData(): BlogPost[] {
    return [
      {
        user: {
          name: 'Edward Fernandez',
          username: 'wardvisual',
          avatar:
            'https://www.bleepstatic.com/content/hl-images/2022/08/17/hacker-ripped-data.jpg',
        },
        thumbnail:
          'http://wallpaperstock.net/arch-linux-universe_wallpapers_30371_852x480.jpg',
        title:
          'Transparent proxy on Arch Linux, with iptables and systemd slice',
        content:
          'Long story short. To build a transparent proxy, we need to redirect every outbound request to the proxy. It seems easy with iptables...',
        tags: ['Web Dev', 'Javascript', 'Angular'],
        date: '02 December 2021',
        stats: {
          reactions: 10,
          comment: [{ wow: 20 }],
        },
      },
      {
        user: {
          name: 'Luke LeeMin',
          username: 'lukelee',
          avatar:
            'https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg',
        },
        thumbnail:
          'http://wallpaperstock.net/arch-linux-universe_wallpapers_30371_852x480.jpg',
        title: 'Transparent proxy on Arch Linux, with ...',
        content:
          'Long story short. To build a transparent proxy, we need to redirect every outbound request to the proxy. It seems easy with iptables...',
        tags: ['Web Dev', 'Javascript', 'Angular'],
        date: '02 December 2021',
        stats: {
          reactions: 10,
          comment: [{ wow: 20 }],
        },
      },
      {
        user: {
          name: 'Luke LeeMin',
          username: 'lukelee',
          avatar:
            'https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/07/pandasecurity-How-do-hackers-pick-their-targets.jpg',
        },
        thumbnail:
          'http://wallpaperstock.net/arch-linux-universe_wallpapers_30371_852x480.jpg',
        title: 'Transparent proxy on Arch Linux, with ...',
        content:
          'Long story short. To build a transparent proxy, we need to redirect every outbound request to the proxy. It seems easy with iptables...',
        tags: ['Web Dev', 'Javascript', 'Angular'],
        date: '02 December 2021',
        stats: {
          reactions: 10,
          comment: [{ wow: 20 }],
        },
      },
    ];
  }
}
