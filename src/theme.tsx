// 1. Import the extendTheme function
import { extendTheme, ChakraProvider } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: '#9c5ddb',
  secondary: '#24252a',
  text: '#6B7280',
};

const theme = extendTheme({ colors });

export function Provider({ children }: { children: React.ReactNode }): JSX.Element {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}

export default theme;
