import { globalStyle } from '@vanilla-extract/css';
import { fontFamily, fontFamilyCode } from './fonts.css';
import { vars } from './themes.css';
import { JETBRAINS_MONO } from '@/public/fonts/fonts.css';

globalStyle('*, *:before, *:after', {
  boxSizing: 'inherit',
  MozBoxSizing: 'inherit',
});

globalStyle('html', {
  boxSizing: 'border-box',
  MozBoxSizing: 'border-box',
  fontSize: '100%',
  margin: 0,
  padding: 0,
  lineHeight: '1.8',
  fontFamily,
  fontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07'",

  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
});

globalStyle('body', {
  width: '100%',
  height: 'auto',
  color: vars.color.default,
  background: 'transparent',
  margin: 0,
  padding: 0,
});

globalStyle('main, article, section, nav, p, h1, h2, h3, h4, h5, h6', {
  WebkitTextSizeAdjust: '100%',
  MozTextSizeAdjust: '100%',
  margin: 0,
  padding: 0,
  fontFeatureSettings: "'case', 'ss02', 'cv13', 'cv09', 'ss05', 'ss07'",
  fontWeight: 400,
});

globalStyle('main', {
  width: '100%',
  minHeight: '100dvh',
  height: 'fit-content',
  paddingTop: '5rem',
  // overflowY: 'auto',
  // scrollbarWidth: 'none',
  // msOverflowStyle: 'none',
  // scrollbarColor: 'transparent',
});

globalStyle('main', {
  backgroundColor: vars.color.b2,
});

globalStyle('body[data-theme] main, body[data-theme] nav, body[data-theme] section', {
  transition: 'background-color 0.15s ease, color 0.15s ease',
});

globalStyle('input, button, select, textarea', {
  fontFamily,
  fontFeatureSettings: "'case', 'ss02',  'cv13', 'cv09', 'ss05', 'ss07', ",
  margin: 0,
  font: 'inherit',
});

globalStyle(
  'button, input[type="submit"], input[type="reset"], input[type="button"], input[type="reset"], input[type="file"]',
  {
    cursor: 'pointer',
    color: vars.color.default,
  }
);

globalStyle('textarea', {
  resize: 'none',
  overflow: 'auto',
});

globalStyle('a', {
  fontFamily,
  fontFeatureSettings: "'case', 'ss02', 'cv13', 'cv09', 'tnum', 'ss07'",
  fontSize: '100%',
  textDecoration: 'none',
  color: 'inherit',
  outline: 0,
  background: 'transparent',
  border: 'none',
});

globalStyle('ul, ol', {
  display: 'block',
  width: '100%',
  padding: vars.padding.post_component,
});

globalStyle('pre', {
  overflow: 'auto',
});

globalStyle('code, pre, pre span', {
  fontSize: '0.835rem',
  lineHeight: '1.5',
  fontFamily: fontFamilyCode,
  fontFeatureSettings: 'normal',
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
  backgroundColor: vars.color.default,
  color: vars.color.b2,
});

globalStyle('p, span, code, ul li, ol li, li', {
  fontSize: '100%',
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
