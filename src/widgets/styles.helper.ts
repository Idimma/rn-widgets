import {
  Dimensions,
  PixelRatio,
  Platform,
  StatusBar,
  StyleSheet,
  ColorValue,
} from 'react-native';

import { scale } from 'react-native-size-matters';
import styles from './styles.json';

export const IS_ANDROID = Platform.OS === 'android';
export const IS_IOS = Platform.OS === 'ios';
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get('window');
export const hairline = StyleSheet.hairlineWidth;
export const Dimension = {
  LABEL: 12,
  TITLE: 24,
  MESSAGE: 16,
  INPUT: 16,
  SPACING: 19,
  WELCOME_TITLE: 20,
  WELCOME_MARGIN: 79,
  ANDROID_STATUSBAR: 24,
  DEVICE_HEIGHT: IS_ANDROID ? SCREEN_HEIGHT - 24 : SCREEN_HEIGHT,
  DEVICE_WIDTH: SCREEN_WIDTH,
  STATUSBAR_HEIGHT: StatusBar.currentHeight,
  LOGO: { width: 48, height: 64, margin: 16 },
  ICON: { marginTop: 135, marginVertical: 55, height: 234, width: 312 },
};

export function isIphoneX() {
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    (SCREEN_HEIGHT >= 812 ||
      SCREEN_WIDTH >= 812 ||
      SCREEN_HEIGHT >= 896 ||
      SCREEN_WIDTH >= 896)
  );
}

export const getScreenHeight = () => SCREEN_HEIGHT;
export const getScreenWidth = () => SCREEN_WIDTH;
export const ifIphoneX = (iphoneXStyle: number, regularStyle: number) =>
  isIphoneX() ? iphoneXStyle : regularStyle;
export const getStatusBarHeight = () => {
  const INNER_STATUS_BAR_HEIGHT = isIphoneX() ? 44 : 20;
  return IS_IOS ? INNER_STATUS_BAR_HEIGHT : 0;
};
export const getHeaderHeight = () => {
  const INNER_HEADER_HEIGHT = isIphoneX() ? 98 : 74;
  return IS_IOS ? INNER_HEADER_HEIGHT : 56;
};
export const headerTopPad = ifIphoneX(scale(46), scale(40));
export const getNavBarHeight = () => getHeaderHeight() - getStatusBarHeight();

export function resizeFont(dp: number) {
  // @ts-ignore
  const ratio = PixelRatio.getFontScale();
  return designHeightRatio(dp) + 2;
}

export const designHeightRatio = (px = 812) =>
  Math.round(SCREEN_HEIGHT * (px / 812));
export const designWidthRatio = (px = 375) =>
  Math.round(SCREEN_WIDTH * (px / 375));
export const DHR = designHeightRatio;
export const DWR = designWidthRatio;
export const {
  colors: { light: lightTheme, dark: darkTheme },
  fontFamily,
  shadow,
} = styles;

export interface ThemeColorsType {
  primary: string;
  secondary: string;
  primaryText: string;
  secondaryText: string;
  plain: string;
  background: string;
  inputBackground: string;
  error: string;
  success: string;
  warning: string;
  danger: string;
  borderColor: string;
  grey: string;

  black: ColorValue;
  amethyst: '#9966CC';
  apricot: '#FBCEB1';
  aqua: '#00FFFF';
  azure: '#007FFF';
  babyBlue: '#89CFF0';
  banana: '#FFE135';
  basil: '#5B7734';
  beige: '#F5F5DC';
  bittersweet: '#FE6F5E';
  blue: '#1D3557';
  blush: '#DE5D83';
  brick: '#CB4154';
  bronze: '#CD7F32';
  brown: '#8D6E63';
  carmine: '#960018';
  chartreuse: '#7FFF00';
  chocolate: '#D2691E';
  cinnamon: '#D2691E';
  cobalt: '#0047AB';
  coffee: '#6F4E37';
  coral: '#FF7F50';
  cream: '#FFFDD0';
  crimson: '#DC143C';
  cyan: '#00FFFF';
  denim: '#1560BD';
  emerald: '#50C878';
  flax: '#EEDC82';
  forestGreen: '#228B22';
  frostbite: '#E936A7';
  fuchsia: '#FF00FF';
  ginger: '#B06500';
  glacierBlue: '#68A0B0';
  gold: '#FFD700';
  gray: '#9E9E9E';
  green: '#2D9E64';
  harlequin: '#3FFF00';
  honey: '#FFB300';
  indigo: '#4B0082';
  iris: '#5A4FCF';
  ivory: '#FFFFF0';
  jade: '#00A86B';
  jungleGreen: '#29AB87';
  khaki: '#F0E68C';
  lavender: '#E6E6FA';
  lemon: '#FFF700';
  lightBlack: '#333333';
  lilac: '#C8A2C8';
  lime: '#00FF00';
  magenta: '#FF00FF';
  maize: '#FBEC5D';
  maroon: '#800000';
  mint: '#98FF98';
  mulberry: '#C54B8C';
  navy: '#000080';
  neonGreen: '#39FF14';
  ochre: '#CC7722';
  offWhite: '#F8F8F8';
  olive: '#808000';
  orange: '#E76F51';
  orchid: '#DA70D6';
  papaya: '#FFEFD5';
  peach: '#FFE5B4';
  pear: '#D1E231';
  periwinkle: '#CCCCFF';
  pineGreen: '#01796F';
  pink: '#F2A1B3';
  plum: '#DDA0DD';
  purple: '#6A0572';
  raspberry: '#E30B5C';
  red: '#E63946';
  rose: '#FF007F';
  ruby: '#E0115F';
  saffron: '#F4C430';
  salmon: '#FA8072';
  sapphire: '#0F52BA';
  scarlet: '#FF2400';
  seaGreen: '#2E8B57';
  sepia: '#704214';
  sienna: '#A0522D';
  silver: '#C0C0C0';
  slateBlue: '#6A5ACD';
  tan: '#D2B48C';
  tangerine: '#F28500';
  teal: '#008080';
  thistle: '#D8BFD8';
  tomato: '#FF6347';
  turquoise: '#40E0D0';
  ultramarine: '#3F00FF';
  vermilion: '#E34234';
  violet: '#EE82EE';
  white: '#FFFFFF';
  wine: '#722F37';
  xanadu: '#738678';
  yaleBlue: '#0F4D92';
  yellow: '#F4A261';
  zinnia: ColorValue;

  [key: `_${string}`]: ColorValue;
}

export interface ColorBooleanType {
  primary?: boolean;
  secondary?: boolean;
  primaryText?: boolean;
  secondaryText?: boolean;
  plain?: boolean;
  background?: boolean;
  inputBackground?: boolean;
  error?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  borderColor?: boolean;
  grey?: boolean;
  black?: boolean;
  amethyst?: boolean;
  apricot?: boolean;
  aqua?: boolean;
  azure?: boolean;
  babyBlue?: boolean;
  banana?: boolean;
  basil?: boolean;
  beige?: boolean;
  bittersweet?: boolean;
  blue?: boolean;
  blush?: boolean;
  brick?: boolean;
  bronze?: boolean;
  brown?: boolean;
  carmine?: boolean;
  chartreuse?: boolean;
  chocolate?: boolean;
  cinnamon?: boolean;
  cobalt?: boolean;
  coffee?: boolean;
  coral?: boolean;
  cream?: boolean;
  crimson?: boolean;
  cyan?: boolean;
  denim?: boolean;
  emerald?: boolean;
  flax?: boolean;
  forestGreen?: boolean;
  frostbite?: boolean;
  fuchsia?: boolean;
  ginger?: boolean;
  glacierBlue?: boolean;
  gold?: boolean;
  gray?: boolean;
  green?: boolean;
  harlequin?: boolean;
  honey?: boolean;
  indigo?: boolean;
  iris?: boolean;
  ivory?: boolean;
  jade?: boolean;
  jungleGreen?: boolean;
  khaki?: boolean;
  lavender?: boolean;
  lemon?: boolean;
  lightBlack?: boolean;
  lilac?: boolean;
  lime?: boolean;
  magenta?: boolean;
  maize?: boolean;
  maroon?: boolean;
  mint?: boolean;
  mulberry?: boolean;
  navy?: boolean;
  neonGreen?: boolean;
  ochre?: boolean;
  offWhite?: boolean;
  olive?: boolean;
  orange?: boolean;
  orchid?: boolean;
  papaya?: boolean;
  peach?: boolean;
  pear?: boolean;
  periwinkle?: boolean;
  pineGreen?: boolean;
  pink?: boolean;
  plum?: boolean;
  purple?: boolean;
  raspberry?: boolean;
  red?: boolean;
  rose?: boolean;
  ruby?: boolean;
  saffron?: boolean;
  salmon?: boolean;
  sapphire?: boolean;
  scarlet?: boolean;
  seaGreen?: boolean;
  sepia?: boolean;
  sienna?: boolean;
  silver?: boolean;
  slateBlue?: boolean;
  tan?: boolean;
  tangerine?: boolean;
  teal?: boolean;
  thistle?: boolean;
  tomato?: boolean;
  turquoise?: boolean;
  ultramarine?: boolean;
  vermilion?: boolean;
  violet?: boolean;
  white?: boolean;
  wine?: boolean;
  xanadu?: boolean;
  yaleBlue?: boolean;
  yellow?: boolean;
  zinnia?: boolean;

  [key: `_${string}`]: boolean | undefined;
}

export interface FontValue {
  regular?: boolean;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;

  [key: `ff-${string}`]: boolean;
}

//Appearance.getColorScheme() === 'dark' ? darkTheme :
export const THEME_COLORS: ThemeColorsType = {
  amethyst: '#9966CC',
  apricot: '#FBCEB1',
  aqua: '#00FFFF',
  azure: '#007FFF',
  babyBlue: '#89CFF0',
  banana: '#FFE135',
  basil: '#5B7734',
  beige: '#F5F5DC',
  bittersweet: '#FE6F5E',
  black: '#000000',
  blue: '#1D3557',
  blush: '#DE5D83',
  brick: '#CB4154',
  bronze: '#CD7F32',
  brown: '#8D6E63',
  carmine: '#960018',
  chartreuse: '#7FFF00',
  chocolate: '#D2691E',
  cinnamon: '#D2691E',
  cobalt: '#0047AB',
  coffee: '#6F4E37',
  coral: '#FF7F50',
  cream: '#FFFDD0',
  crimson: '#DC143C',
  cyan: '#00FFFF',
  denim: '#1560BD',
  emerald: '#50C878',
  flax: '#EEDC82',
  forestGreen: '#228B22',
  frostbite: '#E936A7',
  fuchsia: '#FF00FF',
  ginger: '#B06500',
  glacierBlue: '#68A0B0',
  gold: '#FFD700',
  gray: '#9E9E9E',
  green: '#2D9E64',
  harlequin: '#3FFF00',
  honey: '#FFB300',
  indigo: '#4B0082',
  iris: '#5A4FCF',
  ivory: '#FFFFF0',
  jade: '#00A86B',
  jungleGreen: '#29AB87',
  khaki: '#F0E68C',
  lavender: '#E6E6FA',
  lemon: '#FFF700',
  lightBlack: '#333333',
  lilac: '#C8A2C8',
  lime: '#00FF00',
  magenta: '#FF00FF',
  maize: '#FBEC5D',
  maroon: '#800000',
  mint: '#98FF98',
  mulberry: '#C54B8C',
  navy: '#000080',
  neonGreen: '#39FF14',
  ochre: '#CC7722',
  offWhite: '#F8F8F8',
  olive: '#808000',
  orange: '#E76F51',
  orchid: '#DA70D6',
  papaya: '#FFEFD5',
  peach: '#FFE5B4',
  pear: '#D1E231',
  periwinkle: '#CCCCFF',
  pineGreen: '#01796F',
  pink: '#F2A1B3',
  plum: '#DDA0DD',
  purple: '#6A0572',
  raspberry: '#E30B5C',
  red: '#E63946',
  rose: '#FF007F',
  ruby: '#E0115F',
  saffron: '#F4C430',
  salmon: '#FA8072',
  sapphire: '#0F52BA',
  scarlet: '#FF2400',
  seaGreen: '#2E8B57',
  sepia: '#704214',
  sienna: '#A0522D',
  silver: '#C0C0C0',
  slateBlue: '#6A5ACD',
  tan: '#D2B48C',
  tangerine: '#F28500',
  teal: '#008080',
  thistle: '#D8BFD8',
  tomato: '#FF6347',
  turquoise: '#40E0D0',
  ultramarine: '#3F00FF',
  vermilion: '#E34234',
  violet: '#EE82EE',
  white: '#FFFFFF',
  wine: '#722F37',
  xanadu: '#738678',
  yaleBlue: '#0F4D92',
  yellow: '#F4A261',
  zinnia: '#FFB300',
  ...lightTheme,
};
