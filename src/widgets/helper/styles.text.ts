import { intersection, isNumber, keys, pick } from 'lodash';
import {
  ColorValue,
  DimensionValue,
  StyleSheet,
  type TextProps,
  TextStyle,
} from 'react-native';
import { ms } from 'react-native-size-matters';
import { DHR, DWR } from './index';
import { FontFamily, FontValue, ThemeColorsType } from './@types';
import { useRnWidgetContext } from '../context';

const TEXT_STYLE_MAP: any = {
  p: 'padding',
  pl: 'paddingLeft',
  pt: 'paddingTop',
  pr: 'paddingRight',
  pb: 'paddingBottom',
  px: 'paddingHorizontal',
  py: 'paddingVertical',
  m: 'margin',
  ml: 'marginLeft',
  mt: 'marginTop',
  mr: 'marginRight',
  mb: 'marginBottom',
  my: 'marginVertical',
  mx: 'marginHorizontal',
  lh: 'lineHeight',
  ls: 'letterSpacing',
  bg: 'backgroundColor',
  br: 'borderRadius',
  bw: 'borderWidth',
  bc: 'borderColor',
  align: 'textAlign',
  shadowColor: 'shadowColor',
  shadowOffset: 'shadowOffset',
  shadowOpacity: 'shadowOpacity',
  shadowRadius: 'shadowRadius',
  td: 'textDecorationLine',
  tds: 'textDecorationStyle',
  tdc: 'textDecorationColor',
  writingDirection: 'writingDirection',
  textShadowColor: 'textShadowColor',
  textShadowOffset: 'textShadowOffset',
  textShadowRadius: 'textShadowRadius',
  tav: 'textAlignVertical',
  ifp: 'includeFontPadding',
  fontVariant: 'fontVariant',
};

export const flattenStyle = (
  givenProps: ITextStyleProp,
  custom?: TextStyle,
) => {
  const props: ITextStyleProp = pick(givenProps, [
    'color',
    'selfEnd',
    'fs',
    'fw',
    'pl',
    'p',
    'pt',
    'pr',
    'pb',
    'm',
    'mr',
    'ml',
    'mt',
    'flex',
    'bg',
    'mb',
    'w',
    'dh',
    'dw',
    'align',
    'opacity',
    'ls',
    'lh',
    'h',
    'py',
    'px',
    'my',
    'mx',
    'center',
    'capitalize',
    'transform',
    'lowercase',
    'uppercase',
    'br',
    'bw',
    'bc',
    'shadowColor',
    'shadowOffset',
    'shadowOpacity',
    'shadowRadius',
    'td',
    'tds',
    'tdc',
    'writingDirection',
    'textShadowColor',
    'textShadowOffset',
    'textShadowRadius',
    'tav',
    'ifp',
    'fontVariant',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'article',
  ]);
  const transform = props?.capitalize
    ? 'capitalize'
    : props?.uppercase
      ? 'uppercase'
      : props?.lowercase
        ? 'lowercase'
        : props?.transform;
  const styles: TextStyle | any = {
    fontSize: ms(props?.fs || 14),
    fontWeight: props?.fw || '300',
  };

  keys(props).forEach((key: string) => {
    if (Object.prototype.hasOwnProperty.call(TEXT_STYLE_MAP, key)) {
      // @ts-ignore
      styles[TEXT_STYLE_MAP[key]] = props[key];
    }
  });

  const THEME_COLORS = useRnWidgetContext('colors') as ThemeColorsType;
  const fontFamily = useRnWidgetContext<'fontFamily'>('fontFamily') as FontFamily;

  if (transform) styles.textTransform = transform;
  if (props?.flex) styles.flex = isNumber(props?.flex) ? props?.flex : 1;
  if (props?.dh) styles.height = DHR(props?.dh);
  if (props?.dw) styles.width = DWR(props?.dw);
  if (props?.h) styles.height = props?.h || '100%';
  if (props?.w) styles.width = props?.w || '100%';

  if (props?.selfEnd) styles.alignSelf = 'flex-end';
  if (props?.center) styles.textAlign = 'center';

  styles.color =
    props?.color ||
    THEME_COLORS[
      intersection(
        Object.keys(givenProps),
        Object.keys(THEME_COLORS),
      )[0] as 'primary'
      ] ||
    THEME_COLORS.primaryText;
  styles.fontFamily =
    props?.ff ||
    fontFamily[
      intersection(
        Object.keys(givenProps),
        Object.keys(fontFamily),
      )[0] as 'regular'
      ] ||
    fontFamily.default;

  if (props.h1) {
    styles.fontSize = 36;
    styles.fontWeight = 'bold';
  }

  if (props.h2) {
    styles.fontSize = 30;
    styles.fontWeight = 'bold';
  }

  if (props.h3) {
    styles.fontSize = 24;
    styles.fontWeight = 'bold';
  }

  if (props.h4) {
    styles.fontSize = 20;
    styles.fontWeight = 'bold';
  }

  if (props.h5) {
    styles.fontSize = 18;
    styles.fontWeight = 'bold';
  }

  if (props.h6) {
    styles.fontSize = 16;
    styles.fontWeight = 'bold';
  }

  if (props.article) {
    styles.fontSize = 15;
    styles.fontWeight = 'normal';
  }
  return StyleSheet.flatten([styles, custom]);
};

interface IBooleanProps {
  info?: boolean;
  white?: boolean;
  primary?: boolean;
  warning?: boolean;
  danger?: boolean;
  orange?: boolean;
  black?: boolean;
  transparent?: boolean;
  red?: boolean;
  success?: boolean;
  gray?: boolean;
  grey?: boolean;

  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  thin?: boolean;
  heavy?: boolean;
  italic?: boolean;

  title?: boolean;

  center?: boolean;
  selfEnd?: boolean;

  capitalize?: boolean;
  lowercase?: boolean;
  uppercase?: boolean;
  ifp?: boolean;


  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  article?: boolean;
}

export interface ITextStyleProp extends IBooleanProps, TextProps {
  color?: ColorValue;
  bg?: ColorValue;
  flex?: boolean | number;
  fs?: number;
  fw?: TextStyle['fontWeight'];
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
  align?: TextStyle['textAlign'];
  transform?: TextStyle['textTransform'];

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
   */
  bc?: ColorValue;

  /**
   * @param shadowColor Shadow color for the component
   * Example: If shadowColor is '#000', the shadow color will be set to black.
   */
  shadowColor?: ColorValue;

  /**
   * @param shadowOffset Shadow offset for the component
   * Example: If shadowOffset is { width: 0, height: 2 }, the shadow offset will be set accordingly.
   */
  shadowOffset?: { width: number; height: number };

  /**
   * @param shadowOpacity Shadow opacity for the component
   * Example: If shadowOpacity is 0.5, the shadow opacity will be set to 50%.
   */
  shadowOpacity?: number;

  /**
   * @param shadowRadius Shadow radius for the component
   * Example: If shadowRadius is 4, the shadow radius will be set to 4 units.
   */
  shadowRadius?: number;

  /**
   * @param td Text decoration line for the component
   * Example: If td is 'underline', the Text will be underlined.
   */
  td?: TextStyle['textDecorationLine'];

  /**
   * @param tds Text decoration style for the component
   * Example: If tds is 'dashed', the Text decoration will be dashed.
   */
  tds?: TextStyle['textDecorationStyle'];

  /**
   * @param tdc Text decoration color for the component
   * Example: If tdc is '#f00', the Text decoration color will be red.
   */
  tdc?: ColorValue;

  /**
   * @param writingDirection Writing direction for the component
   * Example: If writingDirection is 'rtl', the Text will be written from right to left.
   */
  writingDirection?: 'auto' | 'ltr' | 'rtl';
  /**
   * @param  ff Font family
   *  Must be regular
   */
  ff?: 'medium' | 'regular' | 'bold' | 'light' | 'italic' | 'heavy';
  /**
   * @param textShadowColor Text shadow color for the component
   * Example: If textShadowColor is '#000', the Text shadow color will be black.
   */
  textShadowColor?: ColorValue;

  /**
   * @param textShadowOffset Text shadow offset for the component
   * Example: If textShadowOffset is { width: 1, height: 1 }, the Text shadow offset will be set accordingly.
   */
  textShadowOffset?: { width: number; height: number };

  /**
   * @param textShadowRadius Text shadow radius for the component
   * Example: If textShadowRadius is 1, the Text shadow radius will be set to 1 unit.
   */
  textShadowRadius?: number;

  /**
   * @param tav Text align vertical for the component
   * Example: If tav is 'center', the Text will be aligned vertically in the center.
   */
  tav?: TextStyle['textAlignVertical'];

  /**
   * @param fontVariant Font variant for the component
   * Example: If fontVariant is ['small-caps'], the Text will be displayed in small caps.
   */
  fontVariant?: TextStyle['fontVariant'];
}

export interface ITextProps extends ITextStyleProp, FontValue {
  show?: boolean;
  hide?: boolean;
  nl?: number;
  numberOfLines?: number;
  style?: TextStyle;
}
