import { useAtom } from 'jotai';
import { themeAtom } from '../atoms';  // Adjust the import path if necessary

const ThemeToggle = () => {
  const [theme, setTheme] = useAtom(themeAtom);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button onClick={toggleTheme} className="theme-toggle">
      Toggle Theme
    </button>
  );
};

export default ThemeToggle;
