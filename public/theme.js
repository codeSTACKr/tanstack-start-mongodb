// Theme initialization script - prevents flash of wrong theme
// Runs immediately before React hydration
(function() {
  const STORAGE_KEY = 'ui-theme';

  // Helper to get cookie by name
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  const theme = getCookie(STORAGE_KEY) || 'system';
  const root = document.documentElement;

  if (theme === 'dark') {
    root.classList.add('dark');
  } else if (theme === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    if (systemTheme === 'dark') {
      root.classList.add('dark');
    }
  }
})();
