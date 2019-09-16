import * as React from "react";
import styled from "styled-components/macro";

import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";

const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 2rem;
`;
const ContactSection = styled.section`
  ${PageSection};
  padding-bottom: 2rem;
  align-self: flex-start;
`;
export const Footer: React.StatelessComponent<{}> = () => (
  <footer>
    <ContactSection id="contact">
      <h2>Get in touch</h2>
      <p>
        Feel free to{" "}
        <Link to="mailto://hello@omardiab.com">shoot me an email</Link>
        {" or "}
        <Link to="https://linkedin.com/in/osdiab">check my LinkedIn</Link>.
      </p>
    </ContactSection>
    <InfoSection>
      <p>
        Like this site? Feel free to{" "}
        <Link to="https://github.com/osdiab/osdiab.github.io/">
          fork it on Github
        </Link>{" "}
        and make it your own.
      </p>
      <p>Omar Diab, {new Date().getFullYear()}</p>
    </InfoSection>
  </footer>
);
