import { createGlobalStyle } from 'styled-components';
import { fontFace } from './utils';
import NanumSquareL from '../assets/fonts/NanumSquareL.woff';
import NanumSquareR from '../assets/fonts/NanumSquareR.woff';

const globalStyle = createGlobalStyle`
  ${fontFace('NanumSquareL', NanumSquareL, 'woff')}
  ${fontFace('NanumSquareR', NanumSquareR, 'woff')}

  :hover, :focus {
    outline: none;
  }

  html, body {
    width: 100%;
    height: 100%;
  }

  body, h1, h2, h3, h4, h5, h6,
  p, blockquote, pre, hr,
  dl, dd, ol, ul, figure,
  input, button, th, td, textarea, div {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
  }

  ul, ol, li {
    list-style: none;
  }

  button {
    border: 0 none;
    border-radius: 0;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }

  img, input, button {
    vertical-align: middle;
  }
`;

export default globalStyle;
