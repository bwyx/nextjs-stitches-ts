import { createTheme } from '~/styles'

const lightTheme = {
  rgb: {
    brand: '121 116 14', // #79740e
    accent: '181 118 20', // #b57614
    fg1: '$rgb$text-800',
    fg2: '$rgb$text-700',
    fg3: '$rgb$text-600',
    bg: '250 250 250' // #fafafa
  }
}

const darkTheme = {
  rgb: {
    brand: '184 187 38', // #b8bb26
    accent: '250 189 47', // #fabd2f
    fg1: '$rgb$text-100',
    fg2: '$rgb$text-300',
    fg3: '$rgb$text-500',
    bg: '16 17 14' // #10110e
  }
}

const themes = {
  light: createTheme('light', lightTheme).toString(),
  dark: createTheme('dark', darkTheme).toString()
}

export const colorScheme = Object.values(themes).join(' ')

export type RGBTheme = keyof typeof lightTheme.rgb & keyof typeof darkTheme.rgb
export default themes
