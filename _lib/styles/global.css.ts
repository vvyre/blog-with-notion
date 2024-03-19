import { globalStyle } from '@vanilla-extract/css';
import { code, kor, latin } from './fonts.css';
import { THEMES } from './colors.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
  MozBoxSizing: 'inherit',
  fontFamily: `${latin}, ${kor}, -apple-system, BlinkMacSystemFont,"Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" `,
});

globalStyle('html', {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  fontSize: '100%',
  lineHeight: '1.65',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
});

globalStyle('body', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  color: THEMES.default,
});

globalStyle('body, main, article, span, p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
  wordSpacing: '-0.05rem',
  letterSpacing: '-0.2px',
  wordBreak: 'keep-all',
  fontWeight: 400,
});

globalStyle('main', {
  minHeight: 'calc(100vh - 8.5rem)',
});

globalStyle('input, button, select, textarea', {
  margin: 0,
  font: 'inherit',
});

globalStyle('button, input[type="submit"],input[type="reset"],input[type="button"]', {
  cursor: 'pointer',
});

globalStyle('textarea', {
  resize: 'none',
  overflow: 'auto',
});

globalStyle('a', {
  textDecoration: 'none',
  color: 'inherit',
  outline: 0,
  background: 'transparent',
  border: 'none',
});

globalStyle('ul, ol', {
  margin: 0,
  padding: 0,
  listStyleType: 'none',
});

globalStyle('li', {
  listStyleType: 'none',
});

globalStyle('pre', {
  overflow: 'auto',
});

globalStyle('code, pre, pre span', {
  fontSize: '0.815rem',
  lineHeight: '1.5',
  fontFamily: code,
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
  fontSize: '1.05rem',
});
