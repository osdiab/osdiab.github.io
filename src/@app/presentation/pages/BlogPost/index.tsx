import * as React from "react";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";

export interface BlogPostRouteParams {
  blogPostId: string;
}
export type BlogPostProps = RouteComponentProps<BlogPostRouteParams>;
export class BlogPost extends React.Component<BlogPostProps> {
  public render() {
    return (
      <div>
        <h1>BlogPost {this.props.match.params.blogPostId}</h1>
        <Link to="/">Back</Link>
      </div>
    );
  }
}
