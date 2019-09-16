import { css } from "styled-components/macro";

export const text = {
  fontFamily: "Source Serif Pro, serif",
  size: {
    paragraph: "1.2rem"
  }
};

const TextBlockStyle = css`
  :not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

const TextStyle = css`
  font-size: 1.2rem;
  line-height: 1.5;
`;

const boldMixin = css`
  font-weight: 700;
`;

const headingStyles = css`
  h1 {
    font-size: 5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 3.5rem;
    }

    ${boldMixin}
  }

  h2 {
    font-size: 3.5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 2.5rem;
    }
    ${boldMixin};
  }

  h3 {
    font-size: 2.5rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 2rem;
    }
    ${boldMixin};
  }

  h4 {
    font-size: 2rem;
    @media (max-width: ${props => props.theme.mediaQueries.sizes.phoneLarge}) {
      font-size: 1.6rem;
    }
    ${boldMixin};
  }

  h5 {
    font-size: 1.4rem;
    ${boldMixin};
  }

  h6 {
    font-size: 1.4rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ${TextBlockStyle}
  }
`;

export const globalTextStyles = css`
  p {
    ${TextBlockStyle}
    ${TextStyle}
  }
  ${headingStyles}
`;
