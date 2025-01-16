import { vars } from '@/_lib/styles/themes.css';
import { style } from '@vanilla-extract/css';

export const POST_LIST_CENTERED = style([
  {
    background: 'transparent',
    lineHeight: 1.65,
    width: '100%',
    maxWidth: '62rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    '@media': {
      '(0px <= width <= 700px)': {
        paddingTop: '25rem',
        paddingBottom: '7.5rem',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
]);
