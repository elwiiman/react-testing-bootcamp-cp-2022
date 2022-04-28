import { sizes, weights, lineHeights } from './characteristics';
import { createGlobalStyle } from 'styled-components';
export const fontTypes = {
  paragraph: `font-size: ${sizes[2]};
                  font-weight: ${weights[0]};
                  line-height: ${lineHeights[2]}px;`,

  caption: `font-size:  ${sizes[1]};
                font-weight:  ${weights[0]};
                line-height: ${lineHeights[1]}px;`,

  titleDesktop: `font-size: ${sizes[7]};
                   font-weight: ${weights[1]};
                   line-height: ${lineHeights[8]}px;`,
};

export const GlobalFonts = createGlobalStyle`
  body{
    font-family: "Roboto", sans-serif !important;
}
`;
