import { useEffect, useState } from 'react'
import themes from '~/styles/themes'

const useTheme = () => {
  const [theme, setTheme] = useState(global.window?.__theme || themes.light)
  const toggleTheme = () => {
    global.window.__setPreferredTheme(
      theme === themes.light ? themes.dark : themes.light
    )
  }

  useEffect(() => {
    global.window.__onThemeChange = setTheme
  }, [])

  return { theme, toggleTheme }
}

export default useTheme
