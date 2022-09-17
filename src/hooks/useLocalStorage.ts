import { useState } from 'react'

type Response<T> = [T, (newValue: T) => void]

export function useLocalStorage<T>(key: string, defaultValue: T): Response<T> {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const value = localStorage.getItem(key)
      return value ? JSON.parse(value) : defaultValue
    } catch {
      return defaultValue
    }
  })

  function setValue(newValue: T) {
    localStorage.setItem(key, JSON.stringify(newValue))
    setStoredValue(newValue)
  }

  return [storedValue, setValue]
}
