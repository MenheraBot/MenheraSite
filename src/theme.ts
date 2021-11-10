// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  primary: '#9c5ddb',
  secondary: '#24252a',
  text: '#6B7280',
};

const styles = {
  global: {
    'html, body': {
      backgroundColor: 'secondary',
    },
  },
};

const theme = extendTheme({ colors, styles });

export default theme;
