import * as React from "react";
import styled from "styled-components/macro";

import { PageBody } from "@app/presentation/utility/layout/PageBody";

const BannerTitle = styled.p`
  font-size: 2rem;
  font-weight: 700;
  max-width: 80%;
  margin: auto;
  text-align: center;
`;
export class HomePage extends React.Component<{}> {
  public render() {
    return (
      <>
        <PageBody>
          <BannerTitle>
            I design and implement simple, powerful and easily maintainable
            products from start to finish.
          </BannerTitle>
        </PageBody>
      </>
    );
  }
}
