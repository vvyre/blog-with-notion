import { site_env } from 'constants/envs'
import logo from '#/img/logo.webp'
const TITLE = 'wyreframelife'
const DESCRIPTION = 'Writings about life as an engineer'

export const meta = {
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: 'Seungyoon Yu', url: site_env.root }],
  creator: 'Seungyoon Yu',
  publisher: 'Seungyoon Yu',
  openGraph: {
    url: site_env.root,
    title: TITLE,
    type: 'website' as const,
    description: DESCRIPTION,
    images: logo,
  },
}
