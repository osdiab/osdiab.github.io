import loadable from "loadable-components";

export enum PostId {
  "2019-09-16-hi" = "2019-09-16-hi"
}
export const posts: { [key in PostId]: loadable.Loadable<{}> } = {
  [PostId["2019-09-16-hi"]]: loadable(() => import("./2019-09-16-hi"))
};
