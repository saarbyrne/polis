import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'var(--font-family)',
        bg: 'var(--bg-color)',
        color: 'var(--text-color)',
      },
    },
  },
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
  },
});

export default theme;
