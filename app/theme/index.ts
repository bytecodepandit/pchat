import { BaseTheme, createTheme } from '@shopify/restyle';
import colors from './colors';
import spacing from './spacing';
import breakpoints from './breakpoints';
import textVariants from './text-variants';
import cardVariants from './card-variants';


const theme: BaseTheme = createTheme({
  // @ts-ignore
    colors,
    spacing,
    breakpoints,
    textVariants,
    cardVariants
  });
  
  export type Theme = typeof theme;
  export default theme;