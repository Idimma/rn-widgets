import {
  BG_GRAY,
  BLACK,
  BLUE,
  DANGER,
  DARK,
  DARK_SUCCESS,
  DEFAULT_DARK_TEXT,
  DEFAULT_TEXT,
  GRAY_TEXT,
  ORANGE,
  PRIMARY,
  RED,
  SECONDARY,
  SUCCESS,
  TRANSPARENT,
  WARNING,
  WHITE,
} from '@/utils/Colors';

import { Dimensions } from 'react-native';
import { isIos } from '@/utils/size';
import { ms } from 'react-native-size-matters';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const DHR = (px = 812) => Math.round(HEIGHT * (px / 812));
const DWR = (px = 375) => Math.round(WIDTH * (px / 375));

export const viewStyles = (props) => {
  let bg = TRANSPARENT;
  let styles = {};
  const {
    end,
    success,
    color,
    justify,
    justified,
    central,
    primary,
    warning,
    py,
    px,
    my,
    mx,
    flex,
    danger,
    lightPrimary,
    secondary,
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
    transparent,
    orange,
    info,
    white,
    opacity,
    gray,
    h,
    dh,
    dw,
    row,
    spaced,
    space_evenly,
    evenly,
    outline,
    aligned,
    self_center,
    absolute,
    self_end,
    self_start,
    b,
    bt,
    bc,
    bb,
    bl,
    br,
    bw,
    grey,
    radius,
    disabled,
    shadow,
    dark_success,
    radiusTR,
    radiusTL,
    radiusBL,
    radiusBR,
    tint,
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
  if (isBoolean(center) && center) {
    styles.alignItems = 'center';
  }

  if (isBoolean(justified) && justified) styles.justifyContent = 'center';
  if (isBoolean(end) && end) styles.justifyContent = 'flex-end';
  if (isBoolean(aligned) && aligned) styles.alignItems = 'center';
  if (isBoolean(self_end) && self_end) styles.alignSelf = 'flex_end';
  if (isBoolean(self_center) && self_center) styles.alignSelf = 'center';
  if (isBoolean(self_start) && self_start) styles.alignSelf = 'flex_start';
  if (isBoolean(absolute)) {
    styles.position = 'absolute';
    if (isBoolean(fill)) {
      styles = { ...styles, top: 0, bottom: 0, right: 0, left: 0 };
    }
  }

  if (isBoolean(white)) bg = WHITE;
  if (isBoolean(black)) bg = BLACK;
  if (isBoolean(secondary)) bg = SECONDARY;
  if (isBoolean(light)) bg = '#F6F6F6';
  if (isBoolean(transparent)) bg = TRANSPARENT;
  if (isBoolean(success)) bg = SUCCESS;
  if (isBoolean(orange)) bg = ORANGE;
  if (isBoolean(dark_success)) bg = DARK_SUCCESS;
  if (isBoolean(dark)) bg = DARK;
  if (isBoolean(danger)) bg = DANGER;
  if (isBoolean(gray) && gray) bg = GRAY_TEXT;
  if (isBoolean(grey) && grey) bg = GRAY_TEXT;
  if (isBoolean(info)) bg = BLUE;
  if (isBoolean(warning)) bg = WARNING;
  if (isBoolean(primary)) bg = PRIMARY;
  if (isString(color)) bg = color;
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
    if (!isIos()) styles.elevation = 1;
  }
  if (isBoolean(card)) {
    styles.shadowColor = 'rgba(0,0,0,1)';
    styles.shadowOffset = { width: 0.1, height: 2 };
    styles.shadowOpacity = 0.4;
    styles.shadowRadius = 1;
    if (!isIos()) styles.elevation = 1;
  }
  styles.backgroundColor = bg;
  if (isBoolean(outline)) {
    styles.borderColor = bg;
    styles.backgroundColor = TRANSPARENT;
    styles.borderWidth = 0.9;
  }
  if (isBoolean(tint)) styles.tintColor = tint;

  if (isNumber(px)) styles.paddingHorizontal = ms(px);
  if (isNumber(py)) styles.paddingVertical = ms(py);
  if (mx) styles.marginHorizontal = ms(mx);
  if (my) styles.marginVertical = ms(my);

  if (isNumber(top)) styles.top = top;
  if (isNumber(zIndex)) styles.zIndex = zIndex;
  if (isNumber(bottom)) styles.bottom = bottom;
  if (isNumber(left)) styles.left = left;
  if (isNumber(right)) styles.right = right;

  if (b) styles.border = b;
  if (bs) styles.borderStyle = bs;
  if (bt) styles.borderTop = ms(bt);
  if (bc) styles.borderColor = bc;
  if (bb) styles.borderBottom = ms(bb);
  if (bl) styles.borderLeft = ms(bl);
  if (br) styles.borderRight = ms(br);

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

export const textStyles = (props) => {
  let cl = DEFAULT_TEXT;
  const {
    color,
    self_end,
    fs,
    fw,
    primary,
    warning,
    danger,
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
    dark,
    mb,
    w,
    dh,
    dw,
    align,
    info,
    white,
    opacity,
    ls,
    orange,
    black,
    bold,
    medium,
    light,
    thin,
    lh,
    h,
    heavy,
    py,
    px,
    my,
    mx,
    title,
    demi,
    semi,
    red,
    italic,
    center,
    transparent,
    success,
    gray,
    capitalize,
    grey,
    transform,
    lowercase,
    uppercase,
  } = props;
  let styles = {};
  styles.fontWeight = '300';
  styles.fontFamily = 'regular';
  styles.fontSize = ms(14);
  if (isBoolean(flex) || isNumber(flex))
    styles.flex = isNumber(flex) ? flex : 1;

  if (p) styles.padding = p;
  if (pl) styles.paddingLeft = pl;
  if (pt) styles.paddingTop = pt;
  if (pr) styles.paddingRight = pr;
  if (pb) styles.paddingBottom = pb;
  if (px) styles.paddingHorizontal = px;
  if (py) styles.paddingVertical = py;
  if (center) styles.textAlign = 'center';
  if (self_end) styles.alignSelf = 'flex-end';

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
  if (bold) styles.fontFamily = 'bold';
  if (heavy) styles.fontFamily = 'heavy';
  if (medium) styles.fontFamily = 'medium';
  if (light) styles.fontFamily = 'light';
  // if (semi) styles.fontFamily = 'semi';
  if (italic) styles.fontFamily = 'italic';

  if (capitalize) styles.textTransform = 'capitalize';
  if (uppercase) styles.textTransform = 'uppercase';
  if (lowercase) styles.textTransform = 'lowercase';
  if (transform) styles.textTransform = transform;

  if (fs) styles.fontSize = ms(fs || 14);
  if (opacity) styles.opacity = opacity || 1;
  if (bg) styles.backgroundColor = bg;

  if (white) cl = WHITE;
  if (black) cl = BLACK;
  if (dark) cl = DEFAULT_DARK_TEXT;
  if (isBoolean(transparent)) cl = TRANSPARENT;
  if (success) cl = SUCCESS;
  if (danger) cl = DANGER;
  if (gray) cl = GRAY_TEXT;
  if (grey) cl = GRAY_TEXT;
  if (info) cl = BLUE;
  if (warning) cl = ORANGE;
  if (primary) cl = PRIMARY;
  if (orange) cl = ORANGE;
  if (red) cl = RED;
  if (color) cl = color;
  styles.color = cl;

  if (title) {
    styles.fontSize = 22;
    styles.fontWeight = 'bold';
  }

  return styles;
};

const isString = (v) => typeof v === 'string' && v;
const isObject = (v) => typeof v === 'object' && v;
const isBoolean = (v) => typeof v === 'boolean' && v;
const isNumber = (v) => typeof v === 'number';
const isFunction = (v) => typeof v === 'function';
