import * as React from "react";
import { RouteComponentProps } from "react-router";

import { posts } from "@app/presentation/pages/BlogPost/posts";
import { NotFound } from "@app/presentation/pages/NotFound";

export interface BlogPostRouteParams {
  blogPostId: string;
}
export type BlogPostProps = RouteComponentProps<BlogPostRouteParams>;

export const BlogPost: React.FC<BlogPostProps> = props => {
  const id = props.match.params.blogPostId;
  const Post = id in posts ? posts[id as keyof typeof posts] : undefined;
  return Post ? <Post /> : <NotFound />;
};
