import * as React from "react";
import styled from "styled-components/macro";

import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";

export interface NavBarEntry {
  displayText: string;
  to: string;
}
export interface NavBarProps {
  entries: NavBarEntry[];
}

const NavElem = styled.nav`
  ${PageSection};
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 2;

  @media (max-width: 576px) {
    justify-content: center;
  }

  > li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const NavBar: React.StatelessComponent<NavBarProps> = ({ entries }) => {
  return (
    <NavElem>
      <NavList>
        {entries.map(({ displayText, to }, index) => (
          <li key={index}>
            <Link to={to}>{displayText}</Link>
          </li>
        ))}
      </NavList>
    </NavElem>
  );
};
