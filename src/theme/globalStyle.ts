import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  /**
    * @description Reset CSS for styled-components
    * @author Eric Meyer's
    * @see {@link https://github.com/zacanger/styled-reset#readme}
  */
  ${reset}
  ${normalize}

  /* Box sizing rules */
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body {
    min-height: 100vh;
    font-family: 'Montserrat', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${(props) => props.theme.colors.black};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    overscroll-behavior: none;
  }

  /* Remove list styles on ul, ol elements with a class attribute */
  ul[class],
  ol[class] {
    list-style: none;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;
export default GlobalStyle;
