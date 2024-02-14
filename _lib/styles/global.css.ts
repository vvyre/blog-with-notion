import { globalStyle } from '@vanilla-extract/css';
import { jetbrainsMono, pretendard } from './fonts.css';
import { COLORS, THEMES } from './colors.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
  MozBoxSizing: 'inherit',
  fontSize: '100%',
  fontFamily: `-apple-system, BlinkMacSystemFont, ${pretendard}, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji" `,
});

globalStyle('html', {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  fontSize: '1rem',
  lineHeight: '1.65',
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
});

globalStyle('body', {
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
});

globalStyle('body, p, h1, h2, h3, h4, h5, h6', {
  margin: 0,
  padding: 0,
  wordBreak: 'break-word',
  fontWeight: 400,
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

globalStyle('a, a:hover, a:active', {
  textDecoration: 'none',
  color: 'inherit',
  outline: 0,
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
  fontSize: '0.825rem',
  lineHeight: '1.5',
  fontFamily: jetbrainsMono,
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
  background: 'transparent',
});

globalStyle('p, span, code, ul li, ol li, li', {
  fontSize: '1.05rem',
});
