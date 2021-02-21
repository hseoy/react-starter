export const HTML_FONT_SIZE = 16;
export const calcRem = px => px / HTML_FONT_SIZE;
export const pxToRem = px => `${calcRem(px)}rem`;

export const fontFace = (
  name,
  url,
  format,
  weight = '400',
  style = 'normal',
  display = 'auto',
) => {
  return `
    @font-face {
      font-family: '${name}';
      src: url('${url}') ${format && `format('${format}')`};
      ${weight && `font-weight: ${weight}`};
      ${style && `font-style: ${style}`};
      ${display && `font-display: ${display}`};
    }
  `;
};
