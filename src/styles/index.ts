import { createStitches } from '@stitches/core'

import type * as Stitches from '@stitches/core'

type RGB = Stitches.ScaleValue<'rgb'>
type Opacity = Stitches.PropertyValue<'opacity'>
type Space = Stitches.ScaleValue<'space'> | `-$${keyof typeof space}` | 'auto'

const space = {
  px: '1px',
  0: '0px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem'
}

export const { css, keyframes, getCssText, globalCss, createTheme, config } =
  createStitches({
    theme: {
      space,
      rgb: {
        'slate-50': '248 250 252', //#f8fafc
        'slate-100': '241 245 249', //#f1f5f9
        'slate-200': '226 232 240', //#e2e8f0
        'slate-300': '203 213 225', //#cbd5e1
        'slate-400': '148 163 184', //#94a3b8
        'slate-500': '100 116 139', //#64748b
        'slate-600': '71 85 105', //#475569
        'slate-700': '51 65 85', //#334155
        'slate-800': '30 41 59', //#1e293b
        'slate-900': '15 23 42' //#0f172a
      },
      fonts: {
        sans: "Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Noto Color Emoji', 'Segoe UI Symbol'",
        serif: "ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif",
        mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
      },
      fontSizes: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '3.75rem',
        '7xl': '4.5rem',
        '8xl': '6rem',
        '9xl': '8rem'
      },
      fontWeights: {
        thin: 100,
        extralight: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900
      },
      lineHeights: {
        none: 1,
        tight: 1.25,
        snug: 1.375,
        normal: 1.5,
        relaxed: 1.625,
        loose: 2,
        3: '.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem'
      },
      letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em'
      },
      radii: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px'
      },
      sizes: {
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
        screenHeight: '100vh'
      },
      zIndices: {
        auto: 'auto',
        0: '0',
        10: '10',
        20: '20',
        30: '30',
        40: '40',
        50: '50'
      },
      borderWidths: {
        default: '1px',
        0: '0',
        2: '2px',
        4: '4px',
        8: '8px'
      }
    },
    media: {
      sm: '(min-width: 640px)',
      md: '(min-width: 768px)',
      lg: '(min-width: 1024px)',
      xl: '(min-width: 1280px)',
      '2xl': '(min-width: 1536px)',
      motionSafe: '(prefers-reduced-motion: no-preference)'
    },
    utils: {
      // Abbreviated margin properties
      mt: (value: Space) => ({
        marginTop: value
      }),
      mr: (value: Space) => ({
        marginRight: value
      }),
      mb: (value: Space) => ({
        marginBottom: value
      }),
      ml: (value: Space) => ({
        marginLeft: value
      }),

      mx: (value: Space) => ({
        marginLeft: value,
        marginRight: value
      }),
      my: (value: Space) => ({
        marginTop: value,
        marginBottom: value
      }),

      // Abbreviated padding properties
      pt: (value: Space) => ({
        paddingTop: value
      }),
      pr: (value: Space) => ({
        paddingRight: value
      }),
      pb: (value: Space) => ({
        paddingBottom: value
      }),
      pl: (value: Space) => ({
        paddingLeft: value
      }),

      px: (value: Space) => ({
        paddingLeft: value,
        paddingRight: value
      }),
      py: (value: Space) => ({
        paddingTop: value,
        paddingBottom: value
      })
    }
  })