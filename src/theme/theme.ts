import {} from 'styled-components';

const theme = {
  colors: {
    black: '#000',
  },
};

declare module 'styled-components' {
  type Theme = typeof theme;
  export interface DefaultTheme extends Theme {}
}

export default theme;
