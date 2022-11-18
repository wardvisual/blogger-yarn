import * as BlogComponent from './blog/index';
import * as HomeComponent from './home/home.component';
import * as CreateBlogComponent from './create-blog/create-blog.component';

export const Views = {
  ...BlogComponent,
  ...HomeComponent,
  ...CreateBlogComponent,
};
