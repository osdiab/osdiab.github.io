import * as React from "react";

import { GlobalStyle } from "@app/presentation/theme/GlobalStyle";
import styled from "@app/presentation/theme/styled-components";
import { Footer } from "./Footer";
import { Header } from "./Header";

const PageContainer = styled.div`
  min-height: 100vh;
  background:

  font-size: ${props => props.theme.text.size.paragraph};
`;

export const DefaultLayout: React.StatelessComponent<{}> = ({ children }) => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </PageContainer>
  );
};
