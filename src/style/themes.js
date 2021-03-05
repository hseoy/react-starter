import { calcRem, pxToRem, fontFace } from './utils';

const fontSizes = {
  title: pxToRem(50),
  subtitle: pxToRem(30),
  paragraph: pxToRem(16),
};

const utils = {
  fontFace,
  calcRem,
  pxToRem,
};

const deviceSizes = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
  mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
  mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
  laptop: `only screen and (max-width: ${deviceSizes.laptop})`,
  laptopL: `only screen and (max-width: ${deviceSizes.laptopL})`,
};

const colors = {
  whiteColor: '#fff',
  textColor: '#1e1e1e',
  primaryColor: '#49317B',
  accentColor: '#04ECDE',
};

const themes = {
  fontSizes,
  deviceSizes,
  device,
  colors,
  utils,
};

export default themes;
