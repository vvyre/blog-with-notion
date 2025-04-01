import { style } from '@vanilla-extract/css'

export const POST_LIST_CENTERED = style([
  {
    background: 'transparent',
    position: 'absolute',
    lineHeight: 1.65,
    width: '100%',
    maxWidth: '31.25rem',
    display: 'flex',
    margin: '0 auto',
    top: '10rem',
    gap: '0.75rem',
    paddingBottom: '20%',
    height: 'auto',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 9,
  },
])
