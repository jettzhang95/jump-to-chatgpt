export const systemDarkModeMediaQuery = (event: MediaQueryListEvent) => {
  if (event.matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
