import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'
import './global.css'

Wordpress2016.overrideThemeStyles = () => {
  return {
    a: {
      color: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: 'none',
    },
    'a.anchor': {
      boxShadow: 'none',
    },
    'p code': {
      fontSize: '1rem',
    },
    'li code': {
      fontSize: '1rem',
    },
    blockquote: {
      color: 'inherit',
      borderLeftColor: 'inherit',
      opacity: '0.8',
    },
    h1: {
      color: 'var(--header)',
    },
    h3: {
      color: 'var(--header)',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
