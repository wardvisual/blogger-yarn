export interface BlogPost {
  user: {
    name: string;
    username: string;
    avatar: string;
  };
  title: string;
  description: string;
  tags: string[];
  date: string;
  stats: {
    reactions: number;
    comment: [{}];
  };
}
