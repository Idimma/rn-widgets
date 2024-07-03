import { intersection, isBoolean, isNumber, isString, keys } from 'lodash';
import { ColorValue, DimensionValue, StyleSheet, ViewProps, ViewStyle } from 'react-native';
import { ms } from 'react-native-size-matters';
import { ColorBooleanType, DHR, DWR, IS_IOS, shadow, THEME_COLORS } from './styles.helper';

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
  let styles: ViewStyle  = {
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

  if (props?.row) styles.flexDirection = 'row';
  if (props?.column) styles.flexDirection = 'column';
  if (props?.rowReverse) styles.flexDirection = 'row-reverse';
  if (props?.columnReverse) styles['flexDirection'] = 'column-reverse';
  if (props?.transform) styles.transform = props?.transform;
  if (props?.flex) {
    styles.flex = isNumber(props?.flex) ? props?.flex : 1;
  }
  if (props?.dh) styles.height = DHR(props?.dh);
  if (props?.dw) styles.width = DWR(props?.dw);
  if (props?.h) styles.height = props?.h as number || '100%';
  if (props?.w) styles.width = props?.w as number || '100%';

  if (props?.selfEnd) styles.alignSelf = 'flex-end';
  if (props?.center || props?.central) {
    styles.alignItems = 'center';
    styles.justifyContent = 'center';
  }

  if (props.wrap) styles.flexWrap = 'wrap';
  if (props?.spaced) styles.justifyContent = 'space-between';
  if (props.evenly) styles.justifyContent = 'space-evenly';

  if (props?.justified) styles.justifyContent = 'center';
  if (props?.contentEnd) styles.justifyContent = 'flex-end';
  if (props?.contentStart) styles.justifyContent = 'flex-start';
  if (props?.aligned) styles.alignItems = 'center';
  if (props?.selfEnd) styles.alignSelf = 'flex-end';
  if (props?.selfStart) styles.alignSelf = 'flex-start';
  if (props?.selfCenter) styles.alignSelf = 'center';
  if (props?.absolute || props?.inset) {
    styles.position = 'absolute';
    if (props?.fill || props?.inset) {
      styles = { ...styles, top: 0, bottom: 0, right: 0, left: 0 };
    }
  }
  if (props?.disabled) styles.opacity = 0.4;

  if (props?.shadow) {
    const shadowType = shadow[(props?.shadow || 'sm') as 'sm'] || {
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
    THEME_COLORS[
      intersection(Object.keys(props), Object.keys(THEME_COLORS))[0] as keyof typeof THEME_COLORS
      ] || styles.backgroundColor;
  if (isBoolean(props.outline)) {
    styles.borderColor = styles.backgroundColor;
    styles.backgroundColor = 'transparent';
    styles.borderWidth = 0.9;
  }
  return StyleSheet.flatten([styles, custom]);
};

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
