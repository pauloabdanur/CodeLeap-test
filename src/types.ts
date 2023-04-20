export type PostType = {
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export type NewPostType = {
  username: string;
  title: string;
  content: string;
};

export type UpdatePostType = {
  id: number;
  title: string;
  content: string;
};
