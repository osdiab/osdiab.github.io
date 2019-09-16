import isRelativeUrl from "is-relative-url";
import * as React from "react";
import {
  HashLink as RouterLink,
  HashLinkProps as RouterLinkProps
} from "react-router-hash-link";
import * as smoothscroll from "smoothscroll-polyfill";
import styled from "styled-components/macro";

import { logger } from "@app/utility/logger";

smoothscroll.polyfill();

export enum LinkAppearance {
  HYPERLINK = "HYPERLINK",
  UNSTYLED = "UNSTYLED"
}

export interface LinkProps {
  to: string;
  appearance?: LinkAppearance;
}

const HyperlinkA = styled.a`
  color: ${props => props.theme.palette.primary};
  font-weight: 700;
  transition: color 0.1s ease-in;

  :hover {
    color: ${props => props.theme.palette.primary};
  }
`;
const UnstyledA = styled.a`
  text-decoration: none;
  color: inherit;
`;
const HyperlinkRouterLink = HyperlinkA.withComponent(RouterLink);
const UnstyledRouterLink = UnstyledA.withComponent(RouterLink);

function logInvalidAppearance(appearance: never) {
  logger.error(
    `Invalid link appearance: '${appearance}'. Rendering as hyperlink.`
  );
}

const AbsoluteLink: React.StatelessComponent<LinkProps> = ({
  to,
  appearance,
  children
}) => {
  const props = { href: to, children };
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <HyperlinkA {...props} />;
    case LinkAppearance.UNSTYLED:
      return <UnstyledA {...props} />;
  }
};

const RelativeLink: React.StatelessComponent<LinkProps> = ({
  to,
  appearance,
  children
}) => {
  const linkProps: RouterLinkProps = {
    children,
    smooth: true,
    to
  };
  switch (appearance) {
    default:
      logInvalidAppearance(appearance);
    // fallthrough
    case undefined: // fallthrough
    case LinkAppearance.HYPERLINK:
      return <HyperlinkRouterLink {...linkProps} />;
    case LinkAppearance.UNSTYLED:
      return <UnstyledRouterLink {...linkProps} />;
  }
};

/**
 * A link to external content.
 */
export const Link: React.StatelessComponent<LinkProps> = props => {
  return isRelativeUrl(props.to) ? (
    <RelativeLink {...props} />
  ) : (
    <AbsoluteLink {...props} />
  );
};
