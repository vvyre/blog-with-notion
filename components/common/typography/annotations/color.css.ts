import { vars } from 'styles/themes.css'
import { styleVariants } from '@vanilla-extract/css'

export const TEXT_COLOR = styleVariants({
  default: { color: vars.notion.default },
  default_background: {
    backgroundColor: vars.notion.default_background,
    color: vars.notion.default,
  },
  blue: { color: vars.notion.blue },
  blue_background: {
    backgroundColor: vars.notion.blue_background,
    color: vars.color.blacktext,
  },
  brown: { color: vars.notion.brown },
  brown_background: {
    backgroundColor: vars.notion.brown_background,
    color: vars.color.blacktext,
  },
  gray: { color: vars.notion.gray },
  gray_background: {
    backgroundColor: vars.notion.gray_background,
    color: vars.color.blacktext,
  },
  green: { color: vars.notion.green },
  green_background: {
    backgroundColor: vars.notion.green_background,
    color: vars.color.blacktext,
  },
  orange: { color: vars.notion.orange },
  orange_background: {
    backgroundColor: vars.notion.orange_background,
    color: vars.color.blacktext,
  },
  pink: { color: vars.notion.pink },
  pink_background: {
    backgroundColor: vars.notion.pink_background,
    color: vars.color.blacktext,
  },
  purple: { color: vars.notion.purple },
  purple_background: {
    backgroundColor: vars.notion.purple_background,
    color: vars.color.blacktext,
  },
  red: { color: vars.notion.red },
  red_background: {
    backgroundColor: vars.notion.red_background,
    color: vars.color.blacktext,
  },
  yellow: { color: vars.notion.yellow },
  yellow_background: {
    backgroundColor: vars.notion.yellow_background,
    color: vars.color.blacktext,
  },
})
