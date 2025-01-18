import { style } from '@vanilla-extract/css'

export const POST_LIST_CENTERED = style([
  {
    background: 'transparent',
    position: 'absolute',
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
        top: '7.5rem',
        paddingBottom: '20%',
        height: 'auto',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
  },
])
