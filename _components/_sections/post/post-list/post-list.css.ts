import { style, styleVariants } from '@vanilla-extract/css'
import { TEXT_STYLE, TYPOGRAPHY } from 'components/basics/typography/typography.css'
import { vars } from 'styles/themes.css'

export const POST_LIST_WRAPPER = style({
  width: '100%',
})

export const POST_LIST_BASE = style({
  cursor: 'pointer',
  justifyContent: 'center',
  display: 'flex',
  width: '100%',
})

export const POST_LINK = style({
  padding: vars.padding.card,
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  display: 'flex',
  width: '100%',
  color: vars.color.postListTitleText,
  borderRadius: vars.border.radius.card,
  zIndex: '9',
  backgroundColor: 'transparent',
  backdropFilter: 'blur(4px)', //ios safari 9, chrome 76 and edge(2019), samsung in-app browser 12.0 (2020), firefox 103 (2022)
  WebkitBackdropFilter: 'blur(4px)', //<safari 9
})

export const POST_LINK_THEME_VARIANT = styleVariants({
  DARK: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.color.postListBgDark,
          color: vars.color.postListTextHoveredDark,
        },
        ':active': {
          backgroundColor: vars.color.postListBgDark,
          color: vars.color.postListTextHoveredDark,
        },
      },
    },
  },
  LIGHT: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.color.postListBgLight,
          color: vars.color.postListTextHoveredLight,
        },
        ':active': {
          backgroundColor: vars.color.postListBgLight,
          color: vars.color.postListTextHoveredLight,
        },
      },
    },
  },
})

export const POST_TITLE = style([
  {
    width: '100%',
    fontSize: '1.05rem',
    fontWeight: 600,
    cursor: 'pointer',
    '@media': {
      '(0px <= width <= 480px)': {
        fontSize: '0.9rem',
      },
    },
  },
])

export const POST_SUMMARY = style([
  TEXT_STYLE.XXS,
  {
    cursor: 'pointer',
    width: '100%',
    '@media': {
      '(0 <= width <= 480px)': {
        fontSize: '0.9rem',
      },
    },
  },
])

export const RELEASED_DATE = style([
  {
    fontSize: TYPOGRAPHY.XXXS.fontSize,
    fontWeight: 500,
    textAlign: 'left',
    width: '100%',
    cursor: 'pointer',
    fontFeatureSettings: '"calt"',
    textDecoration: 'none',
  },
])

export const POST_CATEGORY = style([
  TEXT_STYLE.XXS,
  {
    color: vars.notion.gray,
  },
])

export const HOVER_TEXT = styleVariants({
  default: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.default,
        },
      },
    },
  },
  blue: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.blue,
        },
      },
    },
  },
  blue_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.blue_background,
        },
      },
    },
  },
  brown: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.brown,
        },
      },
    },
  },
  brown_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.brown_background,
        },
      },
    },
  },
  gray: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.gray,
        },
      },
    },
  },
  gray_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.gray_background,
        },
      },
    },
  },
  green: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.green,
        },
      },
    },
  },
  green_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.green_background,
        },
      },
    },
  },
  orange: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.orange,
        },
      },
    },
  },
  orange_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.orange_background,
        },
      },
    },
  },
  pink: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.pink,
        },
      },
    },
  },
  pink_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.pink_background,
        },
      },
    },
  },
  purple: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.purple,
        },
      },
    },
  },
  purple_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.purple_background,
        },
      },
    },
  },
  red: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.red,
        },
      },
    },
  },
  red_background: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          backgroundColor: vars.notion.red_background,
        },
      },
    },
  },
  yellow: {
    '@media': {
      '(hover: hover) and (pointer: fine)': {
        ':hover': {
          color: vars.notion.yellow,
        },
      },
    },
  },
  yellow_background: {
    selectors: {
      '&:hover': { backgroundColor: vars.notion.yellow_background },
    },
  },
})

export const FALLBACK = style({
  color: vars.color.white,
})
