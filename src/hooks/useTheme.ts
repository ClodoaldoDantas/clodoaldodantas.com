import { useEffect } from 'react'
import { useLocalStorage } from './useLocalStorage'

const THEME_STORAGE_KEY = '@clodoaldodantas:theme'

export const useTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const initialTheme = defaultDark ? 'dark' : 'light'

  const [theme, setTheme] = useLocalStorage<'light' | 'dark'>(
    THEME_STORAGE_KEY,
    initialTheme
  )

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return { theme, changeTheme }
}
