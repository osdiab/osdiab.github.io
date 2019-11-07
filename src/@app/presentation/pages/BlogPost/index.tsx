import * as React from "react";
import { RouteComponentProps } from "react-router";

import { posts } from "@app/presentation/pages/BlogPost/posts";
import { NotFound } from "@app/presentation/pages/NotFound";

export interface BlogPostRouteParams {
  blogPostId: string;
}
export type BlogPostProps = RouteComponentProps<BlogPostRouteParams>;

export const UtterancesComments: React.FC = () => (
  // @ts-ignore
  <script
    src="https://utteranc.es/client.js"
    repo="https://github.com/osdiab/osdiab.github.io"
    issue-term="pathname"
    label="blog-comment"
    theme="github-light"
    crossOrigin="anonymous"
    async
  ></script>
);

export const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <section>
        <UtterancesComments />
      </section>
    </>
  );
};

export const BlogPost: React.FC<BlogPostProps> = props => {
  const id = props.match.params.blogPostId;
  const Post = id in posts ? posts[id as keyof typeof posts] : undefined;
  return Post ? (
    <BlogPostLayout>
      <Post />
    </BlogPostLayout>
  ) : (
    <NotFound />
  );
};
