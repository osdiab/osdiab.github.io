import * as React from "react";
import { RouteComponentProps } from "react-router";

import { posts } from "@app/presentation/pages/BlogPost/posts";
import { NotFound } from "@app/presentation/pages/NotFound";

export interface BlogPostRouteParams {
  blogPostId: string;
}
export type BlogPostProps = RouteComponentProps<BlogPostRouteParams>;

export const UtterancesComments: React.FC = () => (
  <section
    ref={elem => {
      if (!elem) {
        return;
      }
      const scriptElem = document.createElement("script");
      scriptElem.src = "https://utteranc.es/client.js";
      scriptElem.async = true;
      scriptElem.crossOrigin = "anonymous";
      scriptElem.setAttribute("repo", "osdiab/osdiab.github.io");
      scriptElem.setAttribute("issue-term", "pathname");
      scriptElem.setAttribute("label", "blog-comment");
      scriptElem.setAttribute("theme", "github-light");
      elem.appendChild(scriptElem);
    }}
  />
);

export const BlogPostLayout: React.FC = ({ children }) => {
  return (
    <>
      <section>{children}</section>
      <UtterancesComments />
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
