import { intersection, isBoolean, isNumber, isString, keys } from 'lodash';
import { StyleSheet, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import { DHR, DWR, IS_IOS } from './index';
import { IViewStyleProp, Shadow, ThemeColorsType } from './@types';
import { useRnWidgetContext } from '../context';

const VIEW_STYLE_MAP: Record<string, string> = {
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
  r: 'borderRadius',
  borderRadius: 'borderRadius',
  bw: 'borderWidth',
  bc: 'borderColor',

  align: 'alignItems',
  justify: 'justifyContent',
  color: 'backgroundColor',

  shadowColor: 'shadowColor',
  shadowOffset: 'shadowOffset',
  shadowOpacity: 'shadowOpacity',
  shadowRadius: 'shadowRadius',
};

type ViewStyleMapKeys = keyof typeof VIEW_STYLE_MAP;

export const viewStyler = (
  props: IViewStyleProp,
  custom?: ViewStyle,
) => {

  const THEME_COLORS = useRnWidgetContext('colors') as ThemeColorsType;
  const SHADOWS = useRnWidgetContext('shadow') as Shadow;
  // const FONT_FAMILY = useRnWidgetContext<'fontFamily'>('fontFamily', COLORS) ;


  let styles: ViewStyle = {
    backgroundColor: 'transparent',
  };
  keys(props).forEach((key: ViewStyleMapKeys) => {
    if (Object.prototype.hasOwnProperty.call(VIEW_STYLE_MAP, key)) {

      styles = {
        ...styles as object,
        [VIEW_STYLE_MAP[key] as string]: props[key as keyof IViewStyleProp],
      } as ViewStyle;

    }
  });

  if (props.row) styles.flexDirection = 'row';
  if (props.column) styles.flexDirection = 'column';
  if (props.rowReverse) styles.flexDirection = 'row-reverse';
  if (props.columnReverse) styles['flexDirection'] = 'column-reverse';
  if (props.transform) styles.transform = props.transform;
  if (props.flex) {
    styles.flex = isNumber(props.flex) ? props.flex : 1;
  }
  if (props.dh) styles.height = DHR(props.dh);
  if (props.dw) styles.width = DWR(props.dw);
  if (props.h) styles.height = props.h as number || '100%';
  if (props.w) styles.width = props.w as number || '100%';

  if (props.selfEnd) styles.alignSelf = 'flex-end';
  if (props.center || props.central) {
    styles.alignItems = 'center';
    styles.justifyContent = 'center';
  }

  if (props.wrap) styles.flexWrap = 'wrap';
  if (props.spaced) styles.justifyContent = 'space-between';
  if (props.evenly) styles.justifyContent = 'space-evenly';

  if (props.justified) styles.justifyContent = 'center';
  if (props.contentEnd) styles.justifyContent = 'flex-end';
  if (props.contentStart) styles.justifyContent = 'flex-start';
  if (props.aligned) styles.alignItems = 'center';
  if (props.selfEnd) styles.alignSelf = 'flex-end';
  if (props.selfStart) styles.alignSelf = 'flex-start';
  if (props.selfCenter) styles.alignSelf = 'center';
  if (props.absolute || props.inset) {
    styles.position = 'absolute';
    if (props.fill || props.inset) {
      styles = { ...styles, top: 0, bottom: 0, right: 0, left: 0 };
    }
  }
  if (props.disabled) styles.opacity = 0.4;

  if (props.shadow) {
    const ind = (typeof props.shadow === 'string' ? props.shadow : 'sm') as 'sm';
    const shadowType = SHADOWS[ind] || {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      elevation: 0.5,
      shadowRadius: 0,
    };
    Object.assign(styles, shadowType);
    if (IS_IOS) styles.elevation = 0;
  }

  if (isNumber(props.top)) styles.top = props.top;
  if (isNumber(props.zIndex)) styles.zIndex = props.zIndex;
  if (isNumber(props.bottom)) styles.bottom = props.bottom;
  if (isNumber(props.left)) styles.left = props.left;
  if (isNumber(props.right)) styles.right = props.right;

  if (props.bs) styles.borderStyle = props.bs;
  if (props.bc) styles.borderColor = props.bc;
  if (props.radius) styles.borderRadius = ms(props.radius);
  if (props.radiusTL) styles.borderTopLeftRadius = ms(props.radiusTL);
  if (props.radiusTR) styles.borderTopRightRadius = ms(props.radiusTR);
  if (props.radiusBR) styles.borderBottomRightRadius = ms(props.radiusBR);
  if (props.radiusBR) styles.borderBottomEndRadius = ms(props.radiusBR);
  if (props.radiusBL) styles.borderBottomLeftRadius = ms(props.radiusBL);

  if (props.maxW) styles.maxWidth = props.maxW;
  if (props.minW) styles.minWidth = props.minW;
  if (props.minH) styles.minHeight = props.minH;

  if (props.bw) styles.borderWidth = props.bw;
  if (props.btw) styles.borderTopWidth = props.btw;
  if (props.bbw) styles.borderBottomWidth = props.bbw;
  if (props.blw) styles.borderLeftWidth = props.blw;
  if (props.brw) styles.borderRightWidth = props.brw;

  if (props.hr) {
    styles.borderBottomColor = isString(props.hr) ? props.hr : '#BDBDBD';
    styles.borderBottomWidth = 1;
  }
  styles.backgroundColor =
    THEME_COLORS[intersection(Object.keys(props), Object.keys(THEME_COLORS))[0] as keyof typeof THEME_COLORS]
    || styles.backgroundColor;
  if (isBoolean(props.outline)) {
    styles.borderColor = styles.backgroundColor;
    styles.backgroundColor = 'transparent';
    styles.borderWidth = 0.9;
  }
  return StyleSheet.flatten([styles, custom]);
};

