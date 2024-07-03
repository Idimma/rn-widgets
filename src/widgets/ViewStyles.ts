// @ts-nocheck
import { intersection } from 'lodash';
import { ColorValue, Dimensions, TextStyle, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import { fontFamily, getColor, IS_IOS } from './utils';

const colors: { [key: string]: string }[] = getColor();
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DHR = (px = 812) => Math.round(HEIGHT * (px / 812));
const DWR = (px = 375) => Math.round(WIDTH * (px / 375));

export const viewStyles = (props) => {
  let bg: string | undefined = 'transparent';
  let styles: ViewStyle = {};
  const {
    end,
    color,
    justify,
    justified,
    central,
    py,
    px,
    my,
    mx,
    flex,
    pl,
    p,
    pt,
    pr,
    pb,
    m,
    mr,
    ml,
    mt,
    mb,
    w,
    align,
    white,
    opacity,
    h,
    dh,
    dw,
    row,
    spaced,
    spaceEvenly,
    evenly,
    outline,
    aligned,
    selfCenter,
    absolute,
    selfEnd,
    selfStart,
    bc,
    bw,
    radius,
    disabled,
    shadow,
    radiusTR,
    radiusTL,
    radiusBL,
    radiusBR,
    lightShadow,
    minW,
    minH,
    btw,
    bbw,
    blw,
    brw,
    hr,
    center,
    maxW,
    top,
    bottom,
    right,
    left,
    zIndex,
    wrap,
    card,
    light,
    bs,
    black,
    fill,
    dark,
    overflow,
  } = props;

  if (isBoolean(flex) || isNumber(flex))
    styles.flex = isNumber(flex) ? flex : 1;
  if (isBoolean(row) && row) styles.flexDirection = 'row';
  if (isBoolean(wrap) && wrap) styles.flexWrap = 'wrap';
  if (isBoolean(spaced) && spaced) styles.justifyContent = 'space-between';
  if (isBoolean(space_evenly) || isBoolean(evenly))
    styles.justifyContent = 'space-evenly';

  if (isBoolean(central) && central) styles.justifyContent = 'center';
  if (isBoolean(central) && central) styles.alignItems = 'center';

  if (isBoolean(center) && center) styles.justifyContent = 'center';
  if (isBoolean(center) && center) styles.alignItems = 'center';

  if (isBoolean(justified) && justified) styles.justifyContent = 'center';
  if (isBoolean(end) && end) styles.justifyContent = 'flex-end';
  if (isBoolean(aligned) && aligned) styles.alignItems = 'center';
  if (isBoolean(selfEnd) && selfEnd) styles.alignSelf = 'flex-end';
  if (isBoolean(selfCenter) && selfCenter) styles.alignSelf = 'center';
  if (isBoolean(selfStart) && selfStart) styles.alignSelf = 'flex-start';
  if (isBoolean(absolute)) {
    styles.position = 'absolute';
    if (isBoolean(fill)) {
      styles = { ...styles, top: 0, bottom: 0, right: 0, left: 0 };
    }
  }

  const selectColor: any =
    intersection(Object.keys(props), Object.keys(colors))[0] || undefined;
  if (selectColor) bg = <string>colors[selectColor] || undefined;
  if (color) bg = color;
  if (isBoolean(disabled)) styles.opacity = 0.4;
  if (isBoolean(lightShadow)) {
    styles.shadowColor = '#000';
    styles.shadowOffset = { width: 0, height: 2 };
    styles.shadowOpacity = 0.4;
  }
  if (isBoolean(shadow)) {
    styles.shadowColor = 'rgba(65, 105, 225, 0.4)';
    styles.shadowOffset = { width: 0.1, height: 1 };
    styles.shadowOpacity = 0.5;
    styles.shadowRadius = 0;
    if (!IS_IOS) styles.elevation = 1;
  }
  if (isBoolean(card)) {
    styles.shadowColor = 'rgba(0,0,0,1)';
    styles.shadowOffset = { width: 0.1, height: 2 };
    styles.shadowOpacity = 0.4;
    styles.shadowRadius = 1;
    if (!IS_IOS) styles.elevation = 1;
  }
  styles.backgroundColor = bg;
  if (isBoolean(outline)) {
    styles.borderColor = bg;
    styles.backgroundColor = 'transparent';
    styles.borderWidth = 0.9;
  }
  if (isNumber(px)) styles.paddingHorizontal = ms(px);
  if (isNumber(py)) styles.paddingVertical = ms(py);
  if (mx) styles.marginHorizontal = ms(mx);
  if (my) styles.marginVertical = ms(my);

  if (isNumber(top)) styles.top = top;
  if (isNumber(zIndex)) styles.zIndex = zIndex;
  if (isNumber(bottom)) styles.bottom = bottom;
  if (isNumber(left)) styles.left = left;
  if (isNumber(right)) styles.right = right;

  if (bs) styles.borderStyle = bs;
  if (bc) styles.borderColor = bc;
  if (radius) styles.borderRadius = ms(radius);
  if (radiusTL) styles.borderTopLeftRadius = ms(radiusTL);
  if (radiusTR) styles.borderTopRightRadius = ms(radiusTR);
  if (radiusBR) styles.borderBottomRightRadius = ms(radiusBR);
  if (radiusBR) styles.borderBottomEndRadius = ms(radiusBR);
  if (radiusBL) styles.borderBottomLeftRadius = ms(radiusBL);

  if (p) styles.padding = ms(p);
  if (pl) styles.paddingLeft = ms(pl);
  if (pt) styles.paddingTop = ms(pt);
  if (pr) styles.paddingRight = ms(pr);
  if (pb) styles.paddingBottom = ms(pb);

  if (m) styles.margin = ms(m);
  if (ml) styles.marginLeft = ms(ml);
  if (mt) styles.marginTop = ms(mt);
  if (mr) styles.marginRight = ms(mr);
  if (mb) styles.marginBottom = ms(mb);

  if (maxW) styles.maxWidth = maxW;

  if (align) styles.alignItems = align || 'flex-start';
  if (justify) styles.justifyContent = justify || 'flex-start';
  if (w) styles.width = w || '100%';
  if (minW) styles.minWidth = minW;
  if (minH) styles.minHeight = minH;
  if (h) styles.height = h || '100%';
  if (isNumber(dh)) styles.height = DHR(dh);
  if (isNumber(dw)) styles.width = DWR(dw);
  if (opacity) styles.opacity = opacity;
  if (bw) styles.borderWidth = bw;
  if (btw) styles.borderTopWidth = btw;
  if (bbw) styles.borderBottomWidth = bbw;
  if (blw) styles.borderLeftWidth = blw;
  if (brw) styles.borderRightWidth = brw;

  if (overflow) styles.overflow = overflow;

  if (hr) {
    styles.borderBottomColor = isString(hr) ? hr : '#BDBDBD';
    styles.borderBottomWidth = 1;
  }

  return styles;
};

export const textStyles = (props: ITextStyleProp) => {
  let cl = colors.primaryText;
  const {
    color,
    selfEnd,
    fs,
    fw,
    pl,
    p,
    pt,
    pr,
    pb,
    m,
    mr,
    ml,
    mt,
    flex,
    bg,
    mb,
    w,
    dh,
    dw,
    align,
    opacity,
    ls,
    lh,
    h,
    py,
    px,
    my,
    mx,
    center,
    capitalize,
    transform,
    lowercase,
    uppercase,
  } = props;
  const styles: TextStyle = { fontSize: ms(14), fontWeight: '300' };
  if (flex) styles.flex = isNumber(flex) ? flex : 1;
  if (p) styles.padding = p;
  if (pl) styles.paddingLeft = pl;
  if (pt) styles.paddingTop = pt;
  if (pr) styles.paddingRight = pr;
  if (pb) styles.paddingBottom = pb;
  if (px) styles.paddingHorizontal = px;
  if (py) styles.paddingVertical = py;
  if (center) styles.textAlign = 'center';
  if (selfEnd) styles.alignSelf = 'flex-end';

  if (m) styles.margin = m;
  if (ml) styles.marginLeft = ml;
  if (mt) styles.marginTop = mt;
  if (mr) styles.marginRight = mr;
  if (mb) styles.marginBottom = mb;
  if (my) styles.marginVertical = my;
  if (mx) styles.marginHorizontal = mx;

  if (align) styles.textAlign = align;
  if (w) styles.width = w || '100%';
  if (h) styles.height = h || '100%';
  if (isNumber(dh)) styles.height = DHR(dh);
  if (isNumber(dw)) styles.width = DWR(dw);
  if (lh) styles.lineHeight = lh;
  if (ls) styles.letterSpacing = ls;

  if (fw) styles.fontWeight = fw;
  if (capitalize) styles.textTransform = 'capitalize';
  if (uppercase) styles.textTransform = 'uppercase';
  if (lowercase) styles.textTransform = 'lowercase';
  if (transform) styles.textTransform = transform;

  if (fs) styles.fontSize = ms(fs || 14);
  if (opacity) styles.opacity = opacity || 1;

  const selectColor: any =
    intersection(Object.keys(props), Object.keys(colors))[0] || undefined;
  if (selectColor) cl = <string>colors[selectColor] || undefined;
  if (bg) styles.backgroundColor = bg;
  if (color) cl = color;
  styles.color = cl;

  const font_family: any =
    intersection(Object.keys(props), Object.keys(fontFamily))[0] || undefined;
  if (font_family)
    styles.fontFamily = <string>fontFamily[font_family] || undefined;
  return styles;
};

const isString = (v) => typeof v === 'string' && v;
const isObject = (v) => typeof v === 'object' && v;
const isBoolean = (v) => typeof v === 'boolean' && v;
const isNumber = (v) => typeof v === 'number';
const isFunction = (v) => typeof v === 'function';

export interface IViewStyleProp {
  end?: boolean;
  success?: boolean;
  color?: string;
  justify?: boolean;
  justified?: boolean;
  central?: boolean;
  primary?: boolean;
  warning?: boolean;
  py?: number;
  px?: number;
  my?: number;
  mx?: number;
  flex?: number | boolean;
  danger?: boolean;
  lightPrimary?: boolean;
  pl?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  m?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  w?: number | string;
  align?: boolean | string;
  transparent?: boolean;
  orange?: boolean;
  info?: boolean;
  white?: boolean;
  opacity?: number;
  gray?: boolean;
  h?: number | string;
  dh?: number;
  dw?: number;
  row?: boolean;
  spaced?: boolean;

  spaceEvenly?: boolean;
  evenly?: boolean;
  outline?: boolean;
  aligned?: boolean;
  selfCenter?: boolean;
  absolute?: boolean;
  selfEnd?: boolean;
  selfStart?: boolean;
  b?: number;
  bt?: number;
  bc?: string;
  bb?: number;
  bl?: number;
  br?: number;
  bw?: number;
  grey?: boolean;
  radius?: number;
  disabled?: boolean;
  shadow?: boolean | string;
  radiusTR?: number;
  radiusTL?: number;
  radiusBL?: number;
  radiusBR?: number;
  tint?: boolean;
  lightShadow?: boolean;
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
  card?: boolean;
  light?: boolean;
  bs?: string;
  black?: boolean;
  fill?: boolean;
  dark?: boolean;
  overflow?: boolean;
}

export interface ITextStyleProp {
  color?: ColorValue;
  selfEnd?: boolean;
  fs?: number;
  fw?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
  primary?: boolean;
  warning?: boolean;
  danger?: boolean;
  pl?: number;
  p?: number;
  pt?: number;
  pr?: number;
  pb?: number;
  m?: number;
  mr?: number;
  ml?: number;
  mt?: number;
  mb?: number;
  w?: number | string;
  info?: boolean;
  white?: boolean;
  opacity?: number;
  ls?: number;
  orange?: boolean;
  black?: boolean;
  bold?: boolean;
  medium?: boolean;
  light?: boolean;
  thin?: boolean;
  lh?: number | undefined;
  align?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  h?: number | string;
  heavy?: boolean;
  py?: number;
  px?: number;
  my?: number;
  mx?: number;
  title?: boolean;
  red?: boolean;
  italic?: boolean;
  center?: boolean;
  transparent?: boolean;
  success?: boolean;
  gray?: boolean;
  capitalize?: boolean;
  grey?: boolean;
  transform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  lowercase?: boolean;
  uppercase?: boolean;
}
