import { extendTheme } from '@chakra-ui/react';

const colors = {
  white: '#fff',
  black: '#484848',
  gray: '#BCBCBC',
  orange: '#FFC255',
};
const styles = {
  global: {
    html: {
      fontSize: '62.5%',
    },
    body: {
      color: 'black',
      fontSize: '1.6rem',
      fontFamily: 'body',
      a: {
        textDecoration: 'none',
      },
      li: {
        listStyleType: 'none',
      },
    },
    '::selection': {
      background: 'rgba(129, 214, 238, 0.2)',
    },
    '::-moz-selection': {
      background: 'rgba(129, 214, 238, 0.2)',
    },
  },
};
const fonts = {
  body: "'游ゴシック体', YuGothic, '游ゴシック', 'Yu Gothic', sans-serif",
  number: "'Barlow', sans-serif",
};
const breakpoints = {
  sm: '640px',
  md: '880px',
  lg: '1000px',
  xl: '1120px',
};
const textStyles = {
  sectionWidth: {
    width: '100%',
    position: 'relative',
    overflowX: 'clip',
  },
  mainGradation: {
    background:
      'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
  },
  orangeGradation: {
    background: 'linear-gradient(90deg, #FFE259 0%, #FFA751 100%)',
  },
  textGradation: {
    background:
      'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  borderGradation: {
    background:
      'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    border: '1px solid #fff',
    borderImage:
      'linear-gradient(90deg, #81D6EE 0%, #BCC5E3 54.69%, #FCB6BE 100%)',
    borderImageSlice: '1',
  },
  rainbowCircle: {
    content: "''",
    width: '504px',
    height: '504px',
    borderRadius: '9999px',
    background: 'linear-gradient(90deg, #E3FDF5 0%, #FFE6FA 100%)',
    filter: 'blur(100px)',
    position: 'absolute',
    zIndex: '-1',
  },
  orangeCircle: {
    content: "''",
    width: '384px',
    height: '384px',
    borderRadius: '9999px',
    background: 'linear-gradient(90deg, #FFC3A0 0%, #FFAFBD 100%)',
    opacity: '0.3',
    filter: 'blur(50px)',
    position: 'absolute',
    zIndex: '-1',
  },
  planCard: {
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: '0px 3px 16px rgba(0, 0, 0, 0.07)',
    borderRadius: '16px',
  },
  planCardPrice: {
    width: 'fit-content',
    fontSize: '6rem',
    fontFamily: 'number',
    lineHeight: '6rem',
  },
  planCardWrap: {
    width: {
      base: '100%',
      sm: '80%',
      md: 'calc((100% - 10% * 1) / 2)',
    },
    alignItems: 'center',
    flexDirection: 'column',
    minW: '296px',
  },
};

const theme = extendTheme({
  styles,
  colors,
  fonts,
  textStyles,
  breakpoints,
});

export default theme;
