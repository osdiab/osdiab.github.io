import * as React from "react";
import styled from "styled-components/macro";

import avatarImg from "@app/assets/avatar.jpg";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";

const HeaderElem = styled.header`
  ${PageSection} display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 0;
  border: 0;
`;
const Avatar = styled.span`
  max-width: 140px;
  min-height: 140px;
  flex: 1;
  align-self: stretch;

  background-image: url(${avatarImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;

  margin-right: 20px;
`;
const BannerTitle = styled.h1`
  margin: 0;
  flex: 1;
`;
const HighlightName = styled.span`
  color: ${props => props.theme.palette.primary};
  display: inline-block;
`;

export const Header: React.StatelessComponent<{}> = () => (
  <HeaderElem>
    <Avatar />
    <BannerTitle>
      I am <HighlightName>Omar Diab.</HighlightName>
    </BannerTitle>
  </HeaderElem>
);
