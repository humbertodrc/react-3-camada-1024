import { useState } from 'react'

const ThemeApp = () => {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div>
      <h1>
        {theme === 'light' ? 'Light Theme' : 'Dark Theme'}
        <button onClick={toggleTheme}>Toggle Theme</button>
      </h1>
    </div>
  )
}
export default ThemeApp