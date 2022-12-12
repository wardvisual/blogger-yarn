export interface BlogPost {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  thumbnail: string;
  title: string;
  content: string;
  tags: string[];
  date: string;
  stats: {
    reactions: number;
    comment: [{}];
  };
}
