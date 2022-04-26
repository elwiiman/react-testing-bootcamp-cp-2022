import { sizes, weights, lineHeights } from './characteristics';
import { createGlobalStyle } from 'styled-components';
export const fontTypes = {
  paragraph: `font-size: ${sizes[2]};
                  font-weight: ${weights[0]};
                  line-height: ${lineHeights[2]}px;`,

  //   paragraphBold: `font-size: ${sizes[2]};
  //                     font-weight: ${weights[1]};
  //                     line-height: ${lineHeights[2]}px;`,

  //   paragraphHyperlink: `font-size: ${sizes[2]};
  //                          font-weight:  ${weights[1]};
  //                          line-height: ${lineHeights[2]}px;
  //                          text-decoration-line: underline;`,

  caption: `font-size:  ${sizes[1]};
                font-weight:  ${weights[0]};
                line-height: ${lineHeights[1]}px;`,

  //   captionBold: `font-size: ${sizes[1]};
  //                   font-weight: ${weights[1]};
  //                   line-height: ${lineHeights[1]}px;`,

  //   micro: `font-size: ${sizes[0]};
  //             font-weight: ${weights[0]};
  //             line-height:  ${lineHeights[0]}px;`,

  //   microBold: `font-size: ${sizes[0]};
  //                 font-weight: ${weights[1]};
  //                 line-height: ${lineHeights[0]}px;`,

  titleDesktop: `font-size: ${sizes[7]};
                   font-weight: ${weights[1]};
                   line-height: ${lineHeights[8]}px;`,

  //   subtitleDesktop: `font-size: ${sizes[7]};
  //                         font-weight: ${weights[1]};
  //                         line-height: ${lineHeights[7]}px;
  //                      `,

  //   subtitle2Desktop: ` font-size: ${sizes[5]};
  //                         font-weight: ${weights[1]};
  //                         line-height: ${lineHeights[5]}px;`,
};

export const GlobalFonts = createGlobalStyle`
  body{
    font-family: "Roboto", sans-serif;
}
`;
