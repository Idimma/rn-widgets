import React, { ReactElement, ReactNode } from 'react';
import {
  ColorValue,
  DimensionValue,
  ScrollViewProps,
  TextInputProps,
  TextStyle,
  ViewProps,
  ViewStyle,
} from 'react-native';

export interface TextFieldType extends TextInputProps {
  renderLeftComponent?: () => void | null | undefined | ReactNode;
  onChangeText?: (e?: any) => void;
  onChange?: (e?: any) => void;
  email?: boolean;
  numbers?: boolean;
  phone?: boolean;
  disabled?: boolean;
  decimal?: boolean;
  refs?: (ref?: any) => void;
  inputStyle?: TextStyle;
  wrapperStyle?: ViewStyle | null;
  dark?: boolean;
  select?: boolean;
  hide?: boolean;
  show?: boolean;
  optionTitle?: string | undefined | React.ReactElement;
  data?: any[];
  error?: string;
  errorStyle?: TextStyle | null;
  label?: '' | string | ReactElement;
  mb?: 14 | number;
  initialValue?: '' | string;
  labelColor?: ColorValue;
  renderRightComponent?: () => void | null | undefined | ReactNode;
  hideError?: boolean;
  secureTextEntry?: boolean;
  multiline?: boolean;
}

export interface IKeyboardAvoidingView extends ScrollViewProps {
  style?: ViewStyle;
  children: React.ReactElement | React.ReactElement[] | null;
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

export interface ThemeColorsType {
  primary: string;
  secondary: string;
  primaryText?: string;
  secondaryText?: string;
  plain?: string;
  background?: string;
  inputBackground?: string;
  error?: string;
  success?: string;
  warning?: string;
  danger?: string;
  borderColor?: string;
  grey?: string;

  black?: ColorValue;
  amethyst?: '#9966CC';
  apricot?: '#FBCEB1';
  aqua?: '#00FFFF';
  azure?: '#007FFF';
  babyBlue?: '#89CFF0';
  banana?: '#FFE135';
  basil?: '#5B7734';
  beige?: '#F5F5DC';
  bittersweet?: '#FE6F5E';
  blue?: '#1D3557';
  blush?: '#DE5D83';
  brick?: '#CB4154';
  bronze?: '#CD7F32';
  brown?: '#8D6E63';
  carmine?: '#960018';
  chartreuse?: '#7FFF00';
  chocolate?: '#D2691E';
  cinnamon?: '#D2691E';
  cobalt?: '#0047AB';
  coffee?: '#6F4E37';
  coral?: '#FF7F50';
  cream?: '#FFFDD0';
  crimson?: '#DC143C';
  cyan?: '#00FFFF';
  denim?: '#1560BD';
  emerald?: '#50C878';
  flax?: '#EEDC82';
  forestGreen?: '#228B22';
  frostbite?: '#E936A7';
  fuchsia?: '#FF00FF';
  ginger?: '#B06500';
  glacierBlue?: '#68A0B0';
  gold?: '#FFD700';
  gray?: '#9E9E9E';
  green?: '#2D9E64';
  harlequin?: '#3FFF00';
  honey?: '#FFB300';
  indigo?: '#4B0082';
  iris?: '#5A4FCF';
  ivory?: '#FFFFF0';
  jade?: '#00A86B';
  jungleGreen?: '#29AB87';
  khaki?: '#F0E68C';
  lavender?: '#E6E6FA';
  lemon?: '#FFF700';
  lightBlack?: '#333333';
  lilac?: '#C8A2C8';
  lime?: '#00FF00';
  magenta?: '#FF00FF';
  maize?: '#FBEC5D';
  maroon?: '#800000';
  mint?: '#98FF98';
  mulberry?: '#C54B8C';
  navy?: '#000080';
  neonGreen?: '#39FF14';
  ochre?: '#CC7722';
  offWhite?: '#F8F8F8';
  olive?: '#808000';
  orange?: '#E76F51';
  orchid?: '#DA70D6';
  papaya?: '#FFEFD5';
  peach?: '#FFE5B4';
  pear?: '#D1E231';
  periwinkle?: '#CCCCFF';
  pineGreen?: '#01796F';
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

export interface LightTheme {
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
  info: string;
  light: string;
  dark: string;

  [key: `_${string}`]: ColorValue;
}

export interface DarkTheme {
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
  info: string;
  light: string;
  dark: string;

  [key: `_${string}`]: ColorValue;
}

export interface FontFamily {
  light: string;
  medium: string;
  default: string;
  regular: string;
  italic: string;
  extraLight: string;
  semiBold: string;
  bold: string;
  heavy: string;
  [key: `ff-${string}`]: string;

}

export interface Shadow {
  sm: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
  };
  lg: {
    shadowColor: string;
    shadowOffset: {
      width: number;
      height: number;
    };
    shadowOpacity: number;
  };
}

interface IBooleanProps {
  /**
   * @param center
   * @doc Center alignment property
   */
  center?: boolean;

  /**
   * @param selfEnd
   * @doc Align self to the end
   */
  selfEnd?: boolean;

  /**
   * @param selfStart
   * @doc Align self to the start
   */
  selfStart?: boolean;

  /**
   * @param selfCenter
   * @doc Center self alignment
   */
  selfCenter?: boolean;

  /**
   * @param contentStart
   * @doc Align content to the start
   */
  contentStart?: boolean;

  /**
   * @param contentCenter
   * @doc Center content alignment
   */
  contentCenter?: boolean;

  /**
   * @param contentEnd
   * @doc Align content to the end
   */
  contentEnd?: boolean;

  /**
   * @param columnReverse
   * @doc Set flex direction to column-reverse
   */
  columnReverse?: boolean;

  /**
   * @param column
   * @doc Set flex direction to column
   */
  column?: boolean;

  /**
   * @param rowReverse
   * @doc Set flex direction to row-reverse
   */
  rowReverse?: boolean;

  /**
   * @param inset
   * @doc Set position to absolute and fill container
   */
  inset?: boolean;
}

export interface IViewStyleProp
  extends IBooleanProps,
    ViewProps,
    ColorBooleanType {
  end?: boolean;
  justify?: boolean;
  justified?: boolean;
  central?: boolean;
  row?: boolean;
  spaced?: boolean;
  spaceEvenly?: boolean;
  evenly?: boolean;
  outline?: boolean;
  aligned?: boolean;

  absolute?: boolean;
  b?: number;
  bt?: number;
  bb?: number;
  bl?: number;
  radius?: number;

  disabled?: boolean;

  radiusTR?: number;
  radiusTL?: number;
  radiusBL?: number;
  radiusBR?: number;

  shadow?: boolean | string;

  minW?: number;
  minH?: number;
  btw?: number;
  bbw?: number;
  blw?: number;
  brw?: number;
  hr?: boolean;
  center?: boolean;
  maxW?: number;
  top?: boolean | number;
  bottom?: boolean | number;
  right?: boolean | number;
  left?: boolean | number;
  zIndex?: number;
  wrap?: boolean;
  bs?: ViewStyle['borderStyle'];

  fill?: boolean;
  overflow?: boolean;

  color?: ColorValue;
  bg?: ColorValue;
  flex?: boolean | number;
  opacity?: number;
  pl?: DimensionValue;
  p?: DimensionValue;
  pt?: DimensionValue;
  pr?: DimensionValue;
  pb?: DimensionValue;
  m?: DimensionValue;
  mr?: DimensionValue;
  ml?: DimensionValue;
  mt?: DimensionValue;
  mb?: DimensionValue;
  py?: DimensionValue;
  px?: DimensionValue;
  my?: DimensionValue;
  mx?: DimensionValue;

  gap?: ViewStyle['gap'];
  columnGap?: ViewStyle['columnGap'];
  rowGap?: ViewStyle['rowGap'];

  /**
   * @param dw Device Width expressed as a percentage of screen width
   *  Example: If dw is 50, the width will be set to 50% of the screen width.
   */
  dw?: number;

  /**
   * @param dh Device Height expressed as a percentage of screen height
   *  Example: If dh is 50, the height will be set to 50% of the screen height.
   */
  dh?: number;

  w?: DimensionValue | boolean;
  h?: DimensionValue | boolean;
  lh?: number;
  ls?: number;
  align?: ViewStyle['alignItems'];
  transform?: ViewStyle['transform'];

  /**
   * @param br Border radius for the component
   * Example: If br is 10, the border radius will be set to 10 units.
   */
  br?: number;

  /**
   * @param bw Border width for the component
   * Example: If bw is 2, the border width will be set to 2 units.
   */
  bw?: number;

  /**
   * @param bc Border color for the component
   * Example: If bc is '#000', the border color will be set to black.
   * @format
   */
  bc?: ColorValue;
}

export interface IViewProps extends IViewStyleProp {
  show?: boolean;
  hide?: boolean;
}
