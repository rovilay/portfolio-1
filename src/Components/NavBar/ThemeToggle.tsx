import * as React from 'react';

import {
  DARK, FLIP_THEME, STORAGE, THEME,
  THEME_ATTRIBUTE, THEME_ICON,
} from '../../settings';

const getCurrentTheme = () => {
  const currentTheme: string = window.localStorage.getItem(THEME) || DARK;

  return currentTheme;
};

const loadTheme = () => {
  const currentTheme: string = getCurrentTheme();

  window.document.documentElement.setAttribute(THEME_ATTRIBUTE, currentTheme);
};

const handleDarkModeToggle = (event: StorageEvent) => {
  if (event.key !== THEME) {
    return;
  }

  loadTheme();
};

const ThemeToggle: React.FC = () => {
  const currentTheme: string = getCurrentTheme();

  const [theme, setTheme] = React.useState(currentTheme);

  React.useEffect(() => {
    loadTheme();

    window.addEventListener(STORAGE, handleDarkModeToggle);
  });

  const toggleDarkMode = () => {
    const currentThemeMode: string = FLIP_THEME[theme];

    setTheme(currentThemeMode);

    window.localStorage.setItem(THEME, currentThemeMode);
    document.documentElement.setAttribute(THEME_ATTRIBUTE, currentThemeMode);
  };

  const themeIcon = () => {
    return THEME_ICON[theme];
  };

  return (
    <div className='navbar-themetoggle'>
      <i className='material-icons-outlined md-18'>wb_sunny</i>
      <i
        className='material-icons-outlined md-36'
        onClick={toggleDarkMode}
      >
        {themeIcon()}
      </i>
      <i className='material-icons-outlined md-18'>nights_stay</i>
    </div>
  );
};

export default ThemeToggle;
