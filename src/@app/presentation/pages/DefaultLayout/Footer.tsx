import * as React from "react";

import styled from "@app/presentation/theme/styled-components";
import { H2 } from "@app/presentation/utility/Heading";
import { Link } from "@app/presentation/utility/Link";
import { PageSection } from "@app/presentation/utility/mixins/PageSection";
import { Paragraph } from "@app/presentation/utility/Paragraph";

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
      <H2>Get in touch</H2>
      <Paragraph>
        Feel free to{" "}
        <Link to="mailto://hello@omardiab.com">shoot me an email</Link>
        {" or "}
        <Link to="https://linkedin.com/in/osdiab">check my LinkedIn</Link>.
      </Paragraph>
    </ContactSection>
    <InfoSection>
      <Paragraph>
        Like this site? Feel free to{" "}
        <Link to="https://github.com/osdiab/osdiab.github.io/">
          fork it on Github
        </Link>{" "}
        and make it your own.
      </Paragraph>
      <Paragraph>Omar Diab, {new Date().getFullYear()}</Paragraph>
    </InfoSection>
  </footer>
);
