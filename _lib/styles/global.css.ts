import { globalStyle } from '@vanilla-extract/css';
import { fontFamily, fontFamilyCode } from './fonts.css';
import { THEMES } from './colors.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
  MozBoxSizing: 'inherit',
});

globalStyle('html', {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  fontSize: '100%',
  lineHeight: '1.8',
  fontFamily,
  fontFeatureSettings: "'case', 'ss05', 'ss07'",
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
});

globalStyle('body', {
  color: THEMES.default,
});

globalStyle('body, main, article, span, p, h1, h2, h3, h4, h5, h6', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  margin: 0,
  padding: 0,
  fontFeatureSettings: "'case', 'ss05', 'ss07'",
  fontWeight: 400,
});

globalStyle('main', {
  minHeight: 'calc(100vh - 15rem)',
});

globalStyle('input, button, select, textarea', {
  fontFamily,
  fontFeatureSettings: "'case', 'ss05', 'ss07', ",
  margin: 0,
  font: 'inherit',
});

globalStyle(
  'button, input[type="submit"], input[type="reset"], input[type="button"], input[type="reset"], input[type="file"]',
  {
    cursor: 'pointer',
    color: THEMES.default,
  }
);

globalStyle('textarea', {
  resize: 'none',
  overflow: 'auto',
});

globalStyle('a', {
  fontFamily,
  fontFeatureSettings: "'case', 'tnum', 'ss07'",
  fontSize: '100%',
  textDecoration: 'none',
  color: 'inherit',
  outline: 0,
  background: 'transparent',
  border: 'none',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  fontFeatureSettings: "'case', 'tnum', 'ss07', 'ss05'",
  listStyleType: 'none',
});

globalStyle('pre', {
  overflow: 'auto',
});

globalStyle('code, pre, pre span', {
  fontSize: '0.835rem',
  lineHeight: '1.5',
  fontFamily: fontFamilyCode,
  MozTabSize: 2,
  tabSize: 2,
});

globalStyle('hr', {
  display: 'block',
  height: '1px',
  border: 0,
  margin: 0,
  padding: 0,
});

globalStyle('img, video, canvas, svg', {
  verticalAlign: 'middle',
});

globalStyle('::selection, ::-moz-selection', {
  backgroundColor: 'black',
  color: 'white',
});

globalStyle('p, span, code, ul li, ol li, li', {
  fontSize: '100%',
});

globalStyle('article>p, article>p>span', {
  textAlign: 'justify',
  textJustify: 'inter-word',
  hyphens: 'auto',
});

globalStyle('span>code', {
  wordBreak: 'break-all',
});

//global UL, OL Styling b/c of nested selector issue of vanilla extract

globalStyle('article ul', {
  listStyleType: 'disc',
});

globalStyle('article ul ul', {
  listStyleType: 'circle',
});

globalStyle('article ul ul ul', {
  listStyleType: 'square',
});

globalStyle('article ol', {
  listStyleType: 'decimal',
});

globalStyle('article ol ol', {
  listStyleType: 'lower-alpha',
});

globalStyle('article ol ol ol', {
  listStyleType: 'lower-roman',
});
