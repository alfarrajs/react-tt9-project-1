
import { createContext, useContext, useState } from 'react';
import { THEMES } from '../constants';

export const ThemeContext = createContext(null);

export function useTheme() {
  const [theme, setTheme] = useState(THEMES.LIGHT);
  return { theme, setTheme };
}