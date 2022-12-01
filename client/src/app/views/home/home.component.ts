import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { ApiService } from 'src/app/core/services/api.service';
import { HttpClient } from '@angular/common/http';
import { PostService } from '../../core/services/post.service';
import { FormBuilder } from '@angular/forms';
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
  post!: Post;
  testData: BlogPost[] = [
    {
      user: {
        name: 'Edward Fernandez',
        username: 'wardvisual',
        avatar:
          'https://www.bleepstatic.com/content/hl-images/2022/08/17/hacker-ripped-data.jpg',
      },
      title: 'Transparent proxy on Arch Linux, with iptables and systemd slice',
      description:
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
      title: 'Transparent proxy on Arch Linux, with ...',
      description:
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
      title: 'Transparent proxy on Arch Linux, with ...',
      description:
        'Long story short. To build a transparent proxy, we need to redirect every outbound request to the proxy. It seems easy with iptables...',
      tags: ['Web Dev', 'Javascript', 'Angular'],
      date: '02 December 2021',
      stats: {
        reactions: 10,
        comment: [{ wow: 20 }],
      },
    },
  ];

  constructor(
    public postService: PostService,
    public formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.postService.get().subscribe(res => console.log({ res }));
  }

  formGroup = this.formBuilder.group<{}>({
    title: '# da',
    description:
      'A component-based framework for building scalable web applications · A collection of well-integrated libraries that cover a wide variety of features, ',
    imageUrl: '',
    categoryId: 7,
    userId: 7,
  });

  public hidePreview() {
    alert('exit');
  }
  public onSubmit(): void {
    this.postService.post(this.formGroup.value).subscribe();
    console.log('Submitted successfully!');
  }
}
