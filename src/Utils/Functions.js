import { breakpoints, languages } from "./Config";

export const setBreakPoint = () => {
  let BreakPoint = '';
  if (typeof window !== 'undefined') {
    let size = window.innerWidth;
    if (size >= breakpoints.values.xl)
      BreakPoint = 'xl';
    else if (size >= breakpoints.values.lg && size < breakpoints.values.xl)
      BreakPoint = 'lg';
    else if (size >= breakpoints.values.md && size < breakpoints.values.lg)
      BreakPoint = 'md';
    else if (size >= breakpoints.values.sm && size < breakpoints.values.md)
      BreakPoint = 'sm';
    else if (size >= breakpoints.values.xs && size < breakpoints.values.sm)
      BreakPoint = 'xs';
  }
  return BreakPoint;
}

export const initAppState = () => {
  let defaultLang = languages.find(x => x.lang === 'en');
  const app = typeof window !== 'undefined' && localStorage.getItem('app');
  let newApp;
  if (!app && typeof window !== 'undefined') {
    newApp = {
      Language: {
        lang: defaultLang.lang,
        direction: defaultLang.direction,
        title: defaultLang.title
      },
      theme: 'Dark',
    }
    localStorage.setItem('app', JSON.stringify(newApp))
  } else {
    newApp = JSON.parse(app);
  }
  return newApp;
}

export const initToken = () => {
  let token = typeof window !== 'undefined' && localStorage.getItem('token');
  if (!token && typeof window !== 'undefined') {
    localStorage.setItem('token', '');
    return '';
  }
  else {
    return token;
  }
}