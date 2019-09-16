import * as React from "react";

import { GlobalStyle } from "@app/presentation/theme/GlobalStyle";
import styled from "@app/presentation/theme/styled-components";
import { Footer } from "@app/presentation/pages/DefaultLayout/Footer";
import { Header } from "@app/presentation/pages/DefaultLayout/Header";

const PageContainer = styled.div`
  min-height: 100vh;
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
